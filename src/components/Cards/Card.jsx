import React from 'react';
import {Card,Typography,CardContent,Grid} from '@material-ui/core';
import CountUp from 'react-countup';
import ReactLoading from 'react-loading';
import classname from 'classnames'
import style from './Card.module.css';

const Cards = ({data:{confirmed,recovered,deaths,lastUpdate}}) => {
    if(!confirmed){
        return (
            <ReactLoading type={"bars"} color={"white "} />
        )
    }
    return (
        <div>
            <Grid container justify="center">
                <Grid item xs={12} md={3}>
                    <Card className={classname(style.card)}>
                        <CardContent className={style.infected}>
                            <Typography color="textSecondary" gutterBottom>
                                Infected People
                            </Typography> 
                            <Typography variant="h5">
                                <CountUp start={0} end={confirmed.value} duration={2} separator="," />
                            </Typography>
                            <Typography color="textSecondary" gutterBottom>
                                {new Date(lastUpdate).toDateString()}
                            </Typography>
                            <Typography variant="body2">
                                Number of active cases of COVID-19
                            </Typography>
                        </CardContent>   
                    </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card className={classname(style.card)}>
                        <CardContent className={style.recovered}>
                            <Typography color="textSecondary" gutterBottom>
                                Recovered People
                            </Typography> 
                            <Typography variant="h5">
                                <CountUp start={0} end={recovered.value} duration={2} separator="," />
                            </Typography>
                            <Typography color="textSecondary" gutterBottom>
                                {new Date(lastUpdate).toDateString()}
                            </Typography>
                            <Typography variant="body2">
                                Number of recoveries cases of COVID-19
                            </Typography>
                        </CardContent>   
                    </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card className={classname(style.card)}>
                        <CardContent className={style.deaths}>
                            <Typography color="textSecondary" gutterBottom>
                                Death People
                            </Typography> 
                            <Typography variant="h5">
                                <CountUp start={0} end={deaths.value} duration={2} separator="," />
                            </Typography>
                            <Typography color="textSecondary" gutterBottom>
                                {new Date(lastUpdate).toDateString()}
                            </Typography>
                            <Typography variant="body2">
                                Number of deaths caused by COVID-19
                            </Typography>
                        </CardContent>   
                    </Card>
                </Grid>

            </Grid>
        </div>   
    )
}
export default Cards