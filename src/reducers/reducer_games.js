import { FETCH_GAMES,DELETE_GAME } from '../actions';

const initialState={
  allGames:[]
}
export default function(state =initialState, action) {
    switch(action.type) {
    case FETCH_GAMES:
        return {...state, allGames:Object.assign([],action.payload.battles)};
    case DELETE_GAME:
        let allGames=Object.assign([],state.allGames);
        let index=allGames.indexOf(action.payload);
        allGames.splice(index,1);
        return {...state, allGames:allGames}

    default:
        return state;
    }
}
