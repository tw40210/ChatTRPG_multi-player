import React, {useState} from "react";
import {  InputLabel , MenuItem , FormControl, Select } from "@material-ui/core";
import { CHINESE, ENGLISH } from '../../constances/srciptType';
import {useSelector, useDispatch} from 'react-redux';
import { switchPrompt } from "../../actions/roleGame";


import useStyles from './styles'

const PromptMenu = ()=>{
    const classes = useStyles();
    const dispatch = useDispatch();
    const [prompt, setPrompt] = useState(CHINESE)
    const handleChange = (event) => {
        setPrompt(event.target.value);
        dispatch(switchPrompt(event.target.value));
      };
    return (
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Prompt</InputLabel>
                <Select
                    labelId="prompt-label"
                    id="prompt-select"
                    value={prompt}
                    label="prompt"
                    onChange={handleChange}
                >
                    <MenuItem value={CHINESE}>Chinese</MenuItem>
                    <MenuItem value={ENGLISH}>English</MenuItem>
                </Select>
        </FormControl>
    );
}

export default PromptMenu;