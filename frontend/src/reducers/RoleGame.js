import {SET_ROLE, CREATEROLE, FETCH_ROLE, RESET_ROLE} from '../constances/actionTypes'

const RoleGame = (roleGame = {roleList:[],  roleName:null}, action) => {
    switch (action.type) {
        case SET_ROLE:
            return {...roleGame, roleName: action.payload};
        case RESET_ROLE:
            return {roleList:[], roleName:null};
        case FETCH_ROLE:
            return {...roleGame, roleList: action.payload};
        case CREATEROLE:
            return {...roleGame, roleList: [...roleGame.roleList, action.payload]};
        default:
            return roleGame;
    }

}

export default RoleGame;