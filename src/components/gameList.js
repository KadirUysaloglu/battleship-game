import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ButtonToolbar, Button } from 'react-bootstrap';
import { fetchGames, selectGame } from '../actions';



class GameList extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {
    // var config = {headers: {'x-api-key': 'x79qTUx0QO5IzR8zsiFvt5a5xOy5HikV2QBLjy0D'}};
    // axios.get('https://zyqh9s9xt4.execute-api.eu-west-1.amazonaws.com/prod/battle',config)
    //   .then(response => this.setState({games:response.data.battles}));
    this.props.fetchGames();
  }
  
  // selectGame(gameId) {
  //   this.props.selectGame(gameId);
  // }

  render(){
    let { games } = this.props;
    
    return(
      <div className='gameList-panel'>
        <ButtonToolbar>
          <Button bsStyle="primary" bsSize="large">Start New Game!</Button>
        </ButtonToolbar>
        <ul>
          <h3>Previous games: </h3>
          {games.map((game,index)=>{
            return(
              <li key={index}><a onClick={() => this.props.selectGame(game.battleId)}>{game.battleId}</a></li>)
          })}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    games: state.games
  }
}

export default connect(mapStateToProps, { fetchGames, selectGame } )(GameList);
