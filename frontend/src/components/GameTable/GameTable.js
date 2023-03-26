import React from "react";
import { CircularProgress, Grid, Paper } from "@material-ui/core";
import {useSelector} from 'react-redux';
import RoleList from "./RoleList";
import PlotArea from "./PlotArea";


import useStyles from './styles'

const GameTable = ()=>{
    const classes = useStyles();
    return (
        <Grid>
            <Grid className={classes.mainContainer}>
                <RoleList/>
            </Grid>
            <Grid className={classes.mainContainer}>
                <PlotArea/>
            </Grid>
        </Grid>
    );
}

export default GameTable;