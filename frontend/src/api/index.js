import axios from 'axios';

const url = 'http://localhost:5000/roleGame';
// const url = 'https://1b5f-86-187-227-43.eu.ngrok.io/roleGame';

const config = {
    headers:{
        "ngrok-skip-browser-warning":"any",
        "Access-Control-Allow-Origin":"*"
    }
  };

export const createRole = (newRole) => axios.post(url+"/createRole", newRole,config);
export const fetchPlot = (idx) => axios.get(url+`/fetchPlot/${idx}`,config);
export const fetchRole = () => axios.get(url+"/fetchRole",config);
export const startGame = () => axios.get(url+"/startGame",config);
export const waitGame = () => axios.get(url+"/waitGame",config);
export const sendCommand = (roleName, command) => axios.post(url+"/sendCommand", {roleName, command},config);
export const resetGame = () => axios.get(url+"/resetGame",config);
