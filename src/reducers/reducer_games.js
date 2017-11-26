import { FETCH_GAMES, SELECT_GAME } from '../actions';

export default function(state =[], action) {
    switch(action.type) {
    case FETCH_GAMES:
        //console.log(action.payload)
        //console.log(action.payload.data.battles);
        return [...state, ...action.payload.data.battles];
    
    case SELECT_GAME:
        const newState = state.filter(game => game.id !== action.payload.id);
        //console.log(newState);
        return [...newState, action.payload];
    
    default:
        return state;
    }
}