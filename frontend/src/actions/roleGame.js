import * as api from '../api';
import {RESET_ROLE, RESET_PLOT, FETCH_PLOT, CREATEROLE,  FETCH_ROLE, SEND_COMMAND, SET_ROLE, WAIT_PLOT, SWITCH_PROMPT} from '../constances/actionTypes'



export const sendCommand = (roleName, command) => async (dispatch) =>{
    try {
        const {data} = await api.sendCommand(roleName, command);

        dispatch({type: SEND_COMMAND, payload: data})
    } catch (error) {
        console.log(error.message); 
    }
}

export const fetchPlot = (idx) => async (dispatch) =>{
    try {
        let {data} = await api.fetchPlot(idx);
        while (!data.isReady){
            data = await (await api.fetchPlot(idx)).data;
            await new Promise(r => setTimeout(r, 1000));
        }
        dispatch({type: FETCH_PLOT, payload: data.plotTexts})
    } catch (error) {
        console.log(error.message); 
    }
}

export const createRole = (role) => async (dispatch) =>{
    try {
        const {data} = await api.createRole(role);
        dispatch({type: CREATEROLE, payload: data.CreatedRole})
    } catch (error) {
        console.log(error.message); 
    }

}

export const setRole = (roleName) => async (dispatch) =>{
    try {
        dispatch({type: SET_ROLE, payload: roleName})
    } catch (error) {
        console.log(error.message); 
    }

}

export const fetchRole = () => async (dispatch) =>{
    try {
        let {data}  = await api.fetchRole();
        while (!data.isStart){
            data = await (await api.fetchRole()).data;
            dispatch({type: FETCH_ROLE, payload: data.roleList})
            await new Promise(r => setTimeout(r, 1000));
        }

    } catch (error) {
        console.log(error.message); 
    }

}
export const waitGame = () => async (dispatch) =>{
    try {

        dispatch({type: WAIT_PLOT, payload: ''})
        
    } catch (error) {
        console.log(error.message); 
    }

}

export const startGame = (prompt) => async (dispatch) =>{
    try {
        const {data} = await api.startGame(prompt);
        dispatch({type: WAIT_PLOT, payload:''})
    } catch (error) {
        console.log(error.message); 
    }

}

export const resetGame = () => async (dispatch) =>{
    try {
        const {data} = await api.resetGame();
        dispatch({type: RESET_PLOT, payload: ''})
        dispatch({type: RESET_ROLE, payload: ''})

    } catch (error) {
        console.log(error.message); 
    }

}

export const switchPrompt = (prompt) => async (dispatch) =>{
    try {
        dispatch({type: SWITCH_PROMPT, payload: prompt})

    } catch (error) {
        console.log(error.message); 
    }

}
