import React, { useState, useEffect } from 'react';
import MainLayout from './Partials/MainLayout';
import './css/Q_A.css';
import data from './Data/Q_A-data';
import { Grid, Typography, Box, TextField, Button, InputBase } from '@material-ui/core';
import axios from 'axios';
import SearchIcon from '@material-ui/icons/Search';


export default function Q_A(props) {
    const [boxes, setBoxes] = useState(data);
    const [search, setSearch] = useState('');
    const [userQuestion, setUserQuestion] = useState('');
    const [userQuestionMessage, setUserQuestionMessage] = useState('');
    const [messageType, setMessageType] = useState('initial')

    useEffect(() => {
        const filteredData = data.filter(element => element.question.toLowerCase().includes( search.toLowerCase() ));
        setBoxes(filteredData);
    }, [search]);

    const sendUserQuestion = () => {
        if(userQuestion === '') {
            setUserQuestionMessage('Wpisz swoje pytanie.');
            setMessageType('error');
        }
        else {
            axios
                .post('api/user-question', 
                {
                    question: userQuestion
                }, 
                {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                })
                .then(response => {
                    setUserQuestionMessage('Pytanie zostało pomyślnie wysłane.');
                    setMessageType('initial');
                    setUserQuestion('');
                })
                .catch(error => {
                    setUserQuestionMessage('Przepraszamy, ale dodawanie pytań jest chwilowo niedostępne.');
                    setMessageType('error');
                });
        }
    }

    return (
        <MainLayout history={props.history}>
            <Grid container>
                <Grid item xs={1} sm={false} md={3} lg={4}/>
                <Grid item xs={10} sm={12} md={6} lg={4}>
                    <Box width={1} display="flex" justifyContent="center">
                        <div className="searchField">
                            <InputBase
                                className="area"
                                placeholder="Search…"
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                                endAdornment={<SearchIcon className="icon" />}
                            />
                        </div>
                    </Box>

                    {boxes.map((box, index) => {
                        return (
                            <Box key={index} my={5}>
                                <Typography variant="h5" color="primary">
                                    {box.question}
                                
                                </Typography>

                                <Typography variant="body1" className="answer">
                                    {box.answer}
                                </Typography>
                            </Box>
                        );
                    })}

                    <Typography align="center">
                        Nie znalazłaś odpowiedzi na swoje pytanie? <br />
                        Napisz do nas, a my je dodamy wraz z odpowiedzią!
                    </Typography>

                    <Box width={1} display="flex" flexDirection="column" alignItems="center" pt={2}>
                        <TextField 
                            label="Pytanie"
                            variant="outlined"
                            value={userQuestion}
                            onChange={e => setUserQuestion(e.target.value)}
                            fullWidth
                        />

                        <Typography color={messageType} className="error-message" align="center">
                            { userQuestionMessage }
                        </Typography>

                        <Button variant="outlined" color="secondary" className="add-question-button" onClick={sendUserQuestion}>
                            Dodaj pytanie
                        </Button>
                    </Box>

                </Grid>
                <Grid item xs={1} sm={false} md={3} lg={4}/>
            </Grid>
        </MainLayout>
    )
}