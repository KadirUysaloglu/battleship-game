import axios from 'axios';
import { dispatch } from 'react-redux';

export const FETCH_GAMES = 'fetch_games';
export const SELECT_GAME = 'create_game';
export const GAME_SELECTED='game_selected';
export const DELETE_GAME='game_delete';

const URL = 'https://zyqh9s9xt4.execute-api.eu-west-1.amazonaws.com/prod/battle';


export function fetchGames() {
    return (dispatch)=>{axios.get(URL, config).then(response=>{
      dispatch( {
          type: FETCH_GAMES,
          payload: response.data
      });
    });
}
}
export const fetchGameSuccess=(board)=>{
  return {
      type: SELECT_GAME,
      payload: board
  }
}
export const deleteGameSuccess=()=>{
  fetchGames();
  return {
    type: DELETE_GAME
  }
}
export function selectGame(gameID) {
    return function(dispatch){
      dispatch({
        type:GAME_SELECTED,
        payload:gameID
      });
      axios.get(`${URL}/${gameID}`, config).then(response=>{
        dispatch(fetchGameSuccess(response.data))});
    }
}
export function deleteGame(gameID){
  return function(dispatch){
    axios.delete(`${URL}/${gameID}`, config).then(response=>{
      dispatch(deleteGameSuccess())});
    }
  }


export function fire(gameID,x,y){
  config.data={
    "coordinate":[
      x,y
    ]
  }
  config.url=`${URL}/${gameID}/fire`;
  config.method='post';

  return function(dispatch){
    dispatch({
      type:GAME_SELECTED,
      payload:gameID
    });
    //axios.get(`${URL}/${gameID}`, config).then(response=>{
      //dispatch(fetchGameSuccess(response.data))});
    axios(config).then(response=>{
      dispatch(fetchGameSuccess(response.data))}).catch((error)=>console.log("error",error));
    }
}
