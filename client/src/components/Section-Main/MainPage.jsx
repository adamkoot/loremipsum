import React, { Fragment, useContext, useEffect, useState } from 'react';
import MainLayout from './Partials/MainLayout';
import UserContext from '../../utilities/userContext';
import moment from 'moment';
import data from './Data/main-page-data'
import { Box, Divider, Grid, Typography } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import './css/main-page.css';

export default function MainPage(props) {
    const {user} = useContext(UserContext);
    const [day , setDay ] = useState(null);

    useEffect(() => {
        if(user) {
            const pregnancyStart = moment(user.pregnancyStart.slice(0, 10), "YYYY MM DD");
            const todayDate = moment();

            const ms = todayDate.diff(pregnancyStart);
            let dayNum = Math.ceil(ms/1000/3600/24);
            if (dayNum < 1) dayNum = 1;
            else if(dayNum > 252) dayNum = 252; 

            setDay(dayNum);
        }
    }, [user]);

    return (
        <MainLayout history={props.history}>
            {day && 
            <Fragment>
                <Typography variant="h4" color="textSecondary" align="center">
                    {(() => {
                        if(data[ day < 8 ? `0.${day}` : Math.ceil(day / 7) ].customNum) 
                            return data[ day < 8 ? `0.${day}` : Math.ceil(day / 7) ].customNum;
                        else if(day <= 7) return `Dzień ${day}`;
                        else return `Tydzień ${Math.ceil(day/7)}`;
                    })()}
                </Typography>

                <Box my={5}></Box>

                <Grid container>
                    <Grid item xs={1} lg={2}>
                        <Box width={1} display="flex" justifyContent='center' alignItems='center' height={1}>
                            <Box className='arrowLeftBox' onClick={e => setDay(prev => {
                                if (prev >= 4 && prev <= 6) return 3;
                                else if (prev >= 14) return prev-7;
                                else if (prev > 7 && prev < 14) return 7;
                                else if(prev > 1) return prev-1;
                                else return prev;
                            })}>
                                <ArrowBackIosIcon color="primary" fontSize='large'/>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={10} lg={8}>
                        <Box width={1} display="flex" justifyContent='center'>
                            <img src={`./photos/${ data[ day < 8 ? `0.${day}` : Math.ceil(day / 7) ].photo}` } alt="" className="svg"/>
                        </Box>
                    </Grid>
                    <Grid item xs={1} lg={2}>
                        <Box width={1} display="flex" justifyContent='center' alignItems='center' height={1}>
                            <Box className='arrowRightBox' onClick={e => setDay(prev => {
                                if (prev >= 4 && prev <= 6) return 7;
                                else if (prev < 7) return prev+1;
                                else if (prev < 246) return prev+7;
                                else return prev;
                            })}>
                                <ArrowForwardIosIcon color="primary" fontSize='large'/>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

                <Grid container className="article">
                    <Grid item xs={1} sm={false} md={3} lg={4}/>
                    <Grid item xs={10} sm={12} md={6} lg={4}>
                        <Typography variant="h5" align="center">
                            Informacje
                        </Typography>

                        <Divider variant="middle" className="divider"/>

                        <Typography align="center" className="p">
                            { data[ day < 8 ? `0.${day}` : Math.ceil(day / 7) ].childInfo }
                        </Typography>
                    </Grid>
                    <Grid item xs={1} sm={false} md={3} lg={4}/>
                </Grid>

            </Fragment>}
            
        </MainLayout>
    )
}