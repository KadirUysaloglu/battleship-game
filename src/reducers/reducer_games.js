import { FETCH_GAMES } from '../actions';

export default function(state =[], action) {
    console.log(action.payload.data);
    switch(action.type) {
    case FETCH_GAMES:
        return console.log(action.payload);
    
    default:
        return state;
    }
}