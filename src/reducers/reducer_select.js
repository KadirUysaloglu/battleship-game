import { SELECT_GAME, GAME_SELECTED, DELETE_GAME } from '../actions';

const initialState = {
  board:[],
  selectedGameId:''
}

export default function(state = initialState, action) {
    
    switch(action.type) {
    case SELECT_GAME:
        return {...state, board:action.payload}
    
    case GAME_SELECTED:
        return {...state, board:[], gameId:action.payload}
    
    case DELETE_GAME:
        return {...state, board:[], gameId:''}
    
    default:
        return state;
    }
}
