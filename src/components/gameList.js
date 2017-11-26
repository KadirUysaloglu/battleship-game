import axios from 'axios';
import React, { Component } from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';


class GameList extends Component {
  constructor(props){
    super(props)
    this.state = {
      games:[]
    }
  }
  componentDidMount() {
    var config = {
    headers: {'x-api-key': 'x79qTUx0QO5IzR8zsiFvt5a5xOy5HikV2QBLjy0D'}
  };
    axios.get('https://zyqh9s9xt4.execute-api.eu-west-1.amazonaws.com/prod/battle',config)
      .then(
        response =>
          this.setState({games:response.data.battles}));
  }
  
  clickMe() {
    alert('Game is loading...');
  }

  render(){
    let allGames = this.state.games;
    console.log(allGames);
    return(
      <div className='gameList-panel'>
        <ButtonToolbar>
          <Button bsStyle="primary" bsSize="large" onClick={this.clickMe}>Start New Game!</Button>
        </ButtonToolbar>
        <ul>
          <h3>Previous games: </h3>
          {allGames.map((game,index)=>{
             return(<li key={index}>{game.battleId}</li>)
          })}
        </ul>
      </div>
    )
  }
}

export default GameList;
