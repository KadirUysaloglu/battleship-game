import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ButtonToolbar, Button } from 'react-bootstrap';
import { fetchGames } from '../actions';


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
  
  clickMe() {
    alert('Game is loading...');
  }

  render(){
    let { games } = this.props;
    console.log(games);
    
    return(
      <div className='gameList-panel'>
        <ButtonToolbar>
          <Button bsStyle="primary" bsSize="large" onClick={this.clickMe}>Start New Game!</Button>
        </ButtonToolbar>
        <ul>
          <h3>Previous games: </h3>
          {games.map((game,index)=>{
             return(<li key={index}>{game.battleId}</li>)
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

export default connect(mapStateToProps, { fetchGames } )(GameList);
