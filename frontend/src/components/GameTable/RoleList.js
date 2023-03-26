import React from "react";
import {  Grid, Paper, Typography} from "@material-ui/core";
import {useSelector} from 'react-redux';


import useStyles from './styles'

const RoleList = ()=>{
    const roleGame = useSelector((state) => state.RoleGame);
    const classes = useStyles();
    return (
        <Paper>
            <Typography className={classes.textContainer} variant="h5">RoleList</Typography>
            {roleGame.roleList.map((role, idx)=>(
                <Grid key={idx}>
                    <Typography className={classes.textContainer} variant="h6">Name: {role.Name} </Typography>
                    <Typography className={classes.textContainer}>Job: {role.Job}  Personality: {role.Personality}  Skills: {role.Skills.join(", ")}</Typography>
                </Grid>
            ))}
        </Paper>
    );
}

export default RoleList;