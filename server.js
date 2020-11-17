//Packages
const express = require('express');
const path = require('path');

//App init
const app = express();
const mainRouter = require('./app');
app.use('/img', express.static('public'))
app.use('/api', mainRouter);

//Seting up deploy
if(process.env.NODE_ENV === "production") {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

//Server starting
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`));