import {SET_ROLE, CREATEROLE, FETCH_ROLE, RESET_ROLE, SWITCH_PROMPT} from '../constances/actionTypes'
import { CHINESE, ENGLISH } from '../constances/srciptType';

const RoleGame = (roleGame = {roleList:[],  roleName:null, prompt:CHINESE}, action) => {
    switch (action.type) {
        case SET_ROLE:
            return {...roleGame, roleName: action.payload};
        case RESET_ROLE:
            return {...roleGame, roleList:[], roleName:null};
        case FETCH_ROLE:
            return {...roleGame, roleList: action.payload};
        case CREATEROLE:
            return {...roleGame, roleList: [...roleGame.roleList, action.payload]};
        case SWITCH_PROMPT:
            return {...roleGame, prompt: action.payload};
        default:
            return roleGame;
    }

}

export default RoleGame;