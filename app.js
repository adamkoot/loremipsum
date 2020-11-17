//Packages
require('dotenv').config();

const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { mongoURI } = require('./config/keys');
const fileUpload = require('express-fileupload');
const nodemailer = require('nodemailer');

//Router init
const router = express.Router();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(morgan('dev'));
router.use(fileUpload());

//Routes
router.use(async (req, res, next) => {
    try {
        req.client = new MongoClient(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        await req.client.connect();
        req.collection = req.client.db().collection("users");
        next();
    }
    catch (err) {
        next(err);
    }
});

router.post('/register', async (req, res, next) => {
    try {
        const { login, password, firstName, lastName, age, height, weight, date } = req.body;

        const searchCursor = req.collection.find({
            eMail: login
        }, {
            projection: {
                _id: 1
            }
        });

        const existingUser = await searchCursor.toArray();

        if (existingUser.length != 0) {
            const error = new Error('User is already registered');
            error.status = 400;
            throw error;
        }

        const hashPasword = bcrypt.hashSync(password, 10);

        const newUser = {
            eMail: login,
            password: hashPasword,
            pregnancyStart: date,
            photo: null,
            firstName: firstName,
            lastName: lastName,
            age: age,
            height: height,
            weight: weight
        }

        const insertCursor = await req.collection.insertOne(newUser);

        res.status(201).send({ newUser });
    }
    catch (err) {
        next(err);
    }
});

router.post('/login', async (req, res, next) => {
    try {
        const { login, password } = req.body;

        const searchCursor = req.collection.find({
            eMail: login
        }, {
            projection: {
                _id: 1,
                password: 1
            }
        });

        const existingUser = await searchCursor.toArray();

        if (existingUser.length === 0) {
            const error = new Error('Bad e-mail or password');
            error.status = 404;
            throw error;
        }

        if (!bcrypt.compareSync(password, existingUser[0].password)) {
            const error = new Error('Wrong password');
            error.status = 404;
            throw error;
        }

        user = {
            id: existingUser[0]._id
        }

        const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);

        res.status(200).send({ accessToken });
    }
    catch (err) {
        next(err);
    }
});

router.get('/user', authenticateToken, async (req, res, next) => {
    const { id } = req.user;

    try {

        const searchCursor = req.collection.find({
            _id: ObjectId(id)
        }, {
            projection: {
                password: 0
            }
        });

        const user = await searchCursor.toArray();
        if (user.length === 0) {
            const error = new Error('User not found.');
            error.status = 404;
            throw error;
        }


        res.status(200).json({ user: user[0] });
        req.client.close();
    }
    catch (err) {
        next(err);
    }
});

router.put('/user', authenticateToken, async (req, res, next) => {
    const { body } = req;
    const { id } = req.user;

    try {
        const updateCursor = await req.collection.updateOne({
            _id: ObjectId(id)
        }, {
            "$set": body
        });

        res.status(200).json({ updatedContent: body });
        req.client.close();
    }
    catch (err) {
        next(err);
    }
});

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    }
});

router.post('/user-question', authenticateToken, async (req, res, next) => {
    const { question } = req.body;

    const mailOptions = {
        from: process.env.EMAIL,
        to: process.env.EMAIL,
        subject: 'New question from user.',
        text: `Question: ${question}`,
        html: `<h3>New question proposal</h3><hr/><p>Question: <span style="color: #3f51b5;">${question}</span></p>`
        // attachments: [{
        //     filename: '1.jpg',
        //     path: './photos/1.jpg',
        //     cid: 'img1' //same cid value as in the html img src
        // }]
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            next(error);
        } else {
            console.log('Email sent: ' + info.response);
            res.sendStatus(204);
            req.client.close();
        }
    });
});

router.post('/auth', authenticateToken, (req, res, next) => {
    res.sendStatus(200);
});

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    })
};

function checkFileType(ext) {
    //Allowed ext
    const fileTypes = /jpeg|jpg|png/;

    //Check ext
    return fileTypes.test(ext);
}

router.post('/upload', authenticateToken, (req, res, next) => {
    const id = req.user.id;

    if (req.files == null) {
        const error = new Error('No file uploaded');
        error.status = 400;
        next(error);
    }
    else {
        const file = req.files.file;
        const ext = file.name.split('.')[file.name.split('.').length - 1];

        if (!checkFileType(ext)) {
            const error = new Error('Bad file extension');
            error.status = 400;
            next(error);
        }
        else {
            file.mv(`${__dirname}/public/${id}.${ext}`, async err => {
                if (err) {
                    next(err);
                }

                try {
                    const updateCursor = await req.collection.updateOne({
                        _id: ObjectId(id)
                    }, {
                        "$set": {
                            photo: `${id}.${ext}`
                        }
                    });
                }
                catch (err) {
                    next(err);
                }

                res.status(200).json({
                    message: 'file uploaded'
                })
            });
        }

    }
});

router.get('/image', authenticateToken, async (req, res, next) => {
    const { id } = req.user;

    try {
        const searchCursor = req.collection.find({
            _id: ObjectId(id)
        }, {
            projection: {
                _id: 0,
                photo: 1
            }
        });

        const user = await searchCursor.toArray();
        if (user.length === 0) {
            const error = new Error('User not found.');
            error.status = 404;
            throw error;
        }


        res.status(200).json({ photo: user[0].photo });
        req.client.close();
    }
    catch (err) {
        next(err);
    }
});


router.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500).json({
        error: {
            message: err.message
        }
    });
    req.client.close();
});
//Export
module.exports = router;