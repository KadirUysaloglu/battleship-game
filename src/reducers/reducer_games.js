import { FETCH_GAMES } from '../actions';

export default function(state =[], action) {
    switch(action.type) {
    case FETCH_GAMES:
        return [...state, ...action.payload.data.battles];
    
    default:
        return state;
    }
}