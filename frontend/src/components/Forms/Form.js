import React, {useState, useEffect} from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';

import useStyles from './styles';
import { createRole, waitGame, sendCommand, fetchPlot, setRole} from '../../actions/roleGame';

const Form = ({currentId, setCurrentId})=>{
    const roleGame = useSelector((state) => state.RoleGame);
    const plotText = useSelector((state) => state.PlotText);
    const [roleData, setRoleData] = useState({ Name: '', Job: '', Personality: '', Skills: ''});
    const [command, setCommand] = useState('');
    
    const classes = useStyles();
    const dispatch = useDispatch();


    const handleSubmit = (e) => {
        e.preventDefault();

        if (roleGame.roleName){
            console.log("Sending", command)
            dispatch(sendCommand(roleGame.roleName, command))
            dispatch(fetchPlot(plotText.idx))

        }  else{
            console.log("Creating", roleData)
            dispatch(createRole(roleData))
            dispatch(setRole(roleData.Name))
            dispatch(waitGame())
            dispatch(fetchPlot(plotText.idx))
        }
        clear();
    }
    const clear = () => {

        if (roleGame.roleName){
            setCommand('')
        }  else{
            setCurrentId(null);
            setRoleData({ Name: '', Job: '', Personality: '', Skills: ''});
        }
    }

    return (
        <Paper className={classes.paper}>
            
            <form autoComplete="off" noValidate className={`${classes.roots} ${classes.form}`} onSubmit={handleSubmit}>
                {roleGame.roleName 
                ?<>
                    <Typography variant="h6">Send Command</Typography>
                    <TextField className={classes.textInput} name="Command" variant="outlined" label="Command" fullWidth value={command} onChange={(e)=>{setCommand(e.target.value)}}/>
                    <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" disabled={(plotText.isWait)} fullWidth>Submit</Button>
                    <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
                </>
                :<>
                    <Typography variant="h6">Create a role</Typography>
                    <TextField className={classes.textInput} name="Name" variant="outlined" label="Name" fullWidth value={roleData.Name} onChange={(e)=>{setRoleData({...roleData, Name:e.target.value})}}/>
                    <TextField className={classes.textInput} name="Job" variant="outlined" label="Job" fullWidth value={roleData.Job} onChange={(e)=>{setRoleData({...roleData, Job:e.target.value})}}/>
                    <TextField className={classes.textInput} name="Personality" variant="outlined" label="Personality" fullWidth value={roleData.Personality} onChange={(e)=>{setRoleData({...roleData, Personality:e.target.value})}}/>
                    <TextField className={classes.textInput} name="Skills" variant="outlined" label="Skills" fullWidth value={roleData.Skills} onChange={(e)=>{setRoleData({...roleData, Skills:e.target.value.split(',')})}}/>
                    <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                    <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
                </>
                }

            </form>
        </Paper>
    ); 
}

export default Form;