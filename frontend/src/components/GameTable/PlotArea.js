import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import {useSelector} from 'react-redux';


import useStyles from './styles'

const PlotArea = ()=>{
    const classes = useStyles();
    const plotText = useSelector((state) => state.PlotText);
    return (
        <Paper>
            <Typography className={classes.textContainer} variant="h5">PlotArea</Typography>
            {plotText.PlotText.map((plot, idx)=>(
                <Grid key={idx}>
                    <Typography className={classes.textContainer} variant="h6">* {plot} </Typography>
                </Grid>
            ))}
        </Paper>
    );
}

export default PlotArea;