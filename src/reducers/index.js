import { combineReducers } from 'redux';

import GamesReducer from './reducer_games';
import SelectReducer from './reducer_select.js';

const rootReducer = combineReducers({
    games: GamesReducer,
    selectedGame: SelectReducer,
});

export default rootReducer;