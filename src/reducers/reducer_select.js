import { SELECT_GAME } from '../actions';

export default function(state = {}, action) {

    switch(action.type) {
    case SELECT_GAME:
        // const newState = state.filter(game => game.data.battle.battleId !== action.payload.data.battle.battleId);
        // console.log(action.payload.data.battle)
        // return [...newState, action.payload];
        return action.payload.data;
        
    default:
        return state;
    }
}