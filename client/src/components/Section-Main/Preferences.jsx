import React, { useContext } from 'react';
import MainLayout from './Partials/MainLayout';
import UserContext from '../../utilities/userContext';
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';
import {
    Grid, 
    Typography, 
    Button,
    TextField,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Box
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useState } from 'react';
import Axios from 'axios';
import AvatarUpload from './Partials/AvatarUpload';
import Footer from './Partials/Footer';

const styles = theme => ({
    root: {
      width: '100%',
    },
    userText: {
        display: 'inline',
        marginLeft: '5px'
    },
    avatar: {
        width: 180,
        height: 180,
        borderRadius: 90,
        padding: 5,
        border: '2px solid',
        borderColor: theme.palette.primary.main,
        marginBottom: 15
    }
});


function Preferences(props) {
    const {user, setUser} = useContext(UserContext);
    const { classes } = props;

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [height, setHeight] = useState(150);
    const [weight, setWeight] = useState(100);
    const [age, setAge] = useState(30);

    function update(obj) {
        Axios
            .put('/api/user', obj, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then(results => {
                const userCopy = {...user};
                userCopy[Object.keys(obj)[0]] = Object.values(obj)[0];
                setUser(userCopy);
            })
            .catch(error => {

            });
    }

    return (
        <MainLayout history={props.history}>
            <Grid container>
                <Grid item xs={1} md={3}/>
                <Grid item xs={10} md={6}>
                    <Typography variant='h5' align="center">
                        Preferencje
                    </Typography>
                    
                    <Box display="flex" alignItems="center" width={1} py={3} flexDirection="column">
                        { user && user.photo ? <img src={`/img/${user.photo}`} className={classes.avatar} alt="avatar"/> : <AccountCircleSharpIcon className={classes.avatar}/>}
                        <AvatarUpload />
                    </Box>

                    <div className={classes.root}>

                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h6">
                                Imię: 
                                <Typography color="primary" className={classes.userText}>{user && user.firstName}</Typography>
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <TextField
                                id="name"
                                label="Imię"
                                variant="outlined"
                                value={firstName}
                                onChange={e => setFirstName(e.target.value)}
                                helperText='Podaj nową wartość'
                            />
                            <Box display='flex' alignItems="center" height="56px" pl={2}>
                                <Button variant="contained" color="secondary" size="medium" onClick={() => update({firstName})}>Zmień</Button>
                            </Box>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h6">
                                Nazwisko: 
                                <Typography color="primary" className={classes.userText}>{user && user.lastName}</Typography>
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <TextField
                                id="lastName"
                                label="Nazwisko"
                                variant="outlined"
                                value={lastName}
                                onChange={e => setLastName(e.target.value)}
                                helperText='Podaj nową wartość'
                            />
                            <Box display='flex' alignItems="center" height="56px" pl={2}>
                                <Button variant="contained" color="secondary" size="medium" onClick={() => update({lastName})}>Zmień</Button>
                            </Box>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h6">
                                Wzrost: 
                                <Typography color="primary" className={classes.userText}>{user && `${user.height}cm`}</Typography>
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <TextField
                                id="height"
                                label="Wzrost"
                                variant="outlined"
                                value={height}
                                onChange={e => {
                                    let val = e.target.value;
                                    if(val < 100) val = 100;
                                    else if(val > 220) val = 220;
                                    setHeight(val);
                                }}
                                helperText='Podaj nową wartość'
                                type="number"
                            />
                            <Box display='flex' alignItems="center" height="56px" pl={2}>
                                <Button variant="contained" color="secondary" size="medium" onClick={() => update({height})}>Zmień</Button>
                            </Box>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h6">
                                Waga: 
                                <Typography color="primary" className={classes.userText}>{user && `${user.weight}kg`}</Typography>
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <TextField
                                id="weight"
                                label="Waga"
                                variant="outlined"
                                value={weight}
                                onChange={e => {
                                    let val = e.target.value;
                                    if(val < 30) val = 30;
                                    else if(val > 200) val = 200;
                                    setWeight(val);
                                }}
                                helperText='Podaj nową wartość'
                                type="number"
                            />
                            <Box display='flex' alignItems="center" height="56px" pl={2}>
                                <Button variant="contained" color="secondary" size="medium" onClick={() => update({weight})}>Zmień</Button>
                            </Box>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h6">
                                Wiek: 
                                <Typography color="primary" className={classes.userText}>{user && user.age}</Typography>
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <TextField
                                id="age"
                                label="Wiek"
                                variant="outlined"
                                value={age}
                                onChange={e => {
                                    let val = e.target.value;
                                    if(val < 10) val = 10;
                                    else if(val > 80) val = 80;
                                    setAge(val);
                                }}
                                helperText='Podaj nową wartość'
                                type="number"
                            />
                            <Box display='flex' alignItems="center" height="56px" pl={2}>
                                <Button variant="contained" color="secondary" size="medium" onClick={() => update({age})}>Zmień</Button>
                            </Box>
                        </AccordionDetails>
                    </Accordion>

                    </div>
                </Grid>
                <Grid item xs={1} md={3}/>
            </Grid>

            <Footer />
        </MainLayout>
    )
}

Preferences.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(Preferences);