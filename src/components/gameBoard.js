import React, { Component } from 'react';
import { connect } from 'react-redux';


class GameBoard extends Component {
  constructor(props){
    super(props);
  }
  

  render(){

    const { games } = this.props;
    console.log(games);

    return(
      <div className='gameBoard-panel'>
        <h1>Game board will appear here!</h1>
          {games.map((game, i) => {
            return (
              <li key={i}>{game.battleId}</li>
            );
          })}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { games: state.games};
}

export default connect(mapStateToProps)(GameBoard);

