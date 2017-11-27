import React, { Component } from 'react';
import { connect } from 'react-redux';


class GameBoard extends Component {
  constructor(props){
    super(props);
  }
  

  render(){

    const { selectedGame } = this.props;
    console.log(selectedGame);

    return(
      <div className='gameBoard-panel'>
        <h1>Game board will appear here!</h1>
        {selectedGame.map((game, i) => {
            return (
              <div key={i}>{game.data.battle.battlefield}</div>
            );
          })}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { selectedGame: state.selectedGame};
}

export default connect(mapStateToProps)(GameBoard);

