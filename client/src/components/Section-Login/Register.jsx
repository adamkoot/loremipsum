import React, { Fragment, useState, useEffect } from "react";
import axios from 'axios';
import auth from '../../utilities/auth';
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Controls from '../Form/Controls';
import Header from '../Form/Header';
import PregnantWomanIcon from "@material-ui/icons/PregnantWoman";
import { Box } from "@material-ui/core";
import './css/login.css';


function validateEmail(email) {
  const regrEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const result = regrEx.test(String(email).toLowerCase());
  return !result;
}

const Register = props => {
  const [errorEmail, setErrorEmail] = useState(false);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [date, setDate] = useState(new Date('2020-09-11T12:00:00'));
  const [goodData, setGoodData] = useState(false);
  const [message, setMessage] = useState('');
  
  useEffect(() => {
    const condition = (errorEmail === false && login !== '' && password !== '' && firstName !== '' && lastName !== '' && age !== '' && height !== '' && weight !== '');

    if(condition !== goodData)
      setGoodData(condition);
  }, [login, errorEmail, password, firstName, lastName, age, height, weight])

  const register = () => {
    axios
      .post('api/register',
        {
          login,
          password,
          date,
          firstName,
          lastName,
          age,
          height,
          weight
        },
        {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        })
      .then(res => {
        auth.logout(() => {
          props.history.push("/");
        })
      })
      .catch(err => {
        setMessage(err.response.status === 400 ? 'Użytkownik o podanym emailu już istnieje' : 'Nasz serwery są chwilowo niedostępne');
      });
  }

  return (
    <Fragment>
      <Grid container alignItems="center" className="login">
        <Grid item xs={1} md={2} lg={3} ></Grid>
        <Grid item xs={10} md={8} lg={6}>
          <Card>
            <Box py={2}>
              <Header>
                <PregnantWomanIcon fontSize="inherit" />
                Zarejestruj się
              </Header>

              <Divider light />

              <CardContent>
                <Grid container spacing={4}>
                  <Grid item xs={6}>

                    <Controls.TextInput
                      label="Imię"
                      value={firstName}
                      onChange={e => { setFirstName(e.currentTarget.value); }} />

                    <Controls.TextInput
                      error={errorEmail}
                      label="Email"
                      value={login}
                      onChange={e => {
                        setErrorEmail(validateEmail(e.currentTarget.value));
                        setLogin(e.currentTarget.value);
                      }} />
                      
                    <Controls.DatePicker
                      name="date"
                      label="Data rozpoczęcią ciąży"
                      value={date}
                      onChange={setDate}/>
                  </Grid>

                  <Grid item xs={6}>

                    <Controls.TextInput
                      label="Nazwisko"
                      value={lastName}
                      onChange={e => { setLastName(e.currentTarget.value); }} />

                    <Controls.TextInput
                      label="Hasło"
                      value={password}
                      onChange={e => { setPassword(e.currentTarget.value); }}
                      type="password" />

                    <Grid container item xs={12} spacing={2}>

                      <Grid item xs={6} md={4}>
                        <Controls.SelectInput
                          label="Wiek"
                          id="select1"
                          value={age}
                          onChange={e => setAge(e.target.value)}
                          startValue={10}
                          endValue={80} />
                      </Grid>

                      <Grid item xs={6} md={4}>
                        <Controls.SelectInput
                          label="Wzrost"
                          id="select2"
                          value={height}
                          onChange={e => setHeight(e.target.value)}
                          startValue={100}
                          endValue={220} />
                      </Grid>

                      <Grid item xs={6} md={4}>
                        <Controls.SelectInput
                          label="Waga"
                          id="select3"
                          value={weight}
                          onChange={e => setWeight(e.target.value)}
                          startValue={30}
                          endValue={200} />
                      </Grid>

                    </Grid>
                  </Grid>
                </Grid>

                <Typography color="error" align="center">
                  {message}
                </Typography>

              </CardContent>
              <CardActions>
                <Grid item xs={12}>
                  <Typography align="center">
                    <Button disabled={!goodData} variant="contained" color="primary" onClick={register}>
                      Zarejestruj
                    </Button>
                  </Typography>
                </Grid>
              </CardActions>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={1} md={2} lg={3}></Grid>
      </Grid>
    </Fragment>
  );
}

export default Register;
