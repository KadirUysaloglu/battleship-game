import React, { Component } from 'react';
import { connect } from 'react-redux';


class GameBoard extends Component {
  constructor(props){
    super(props);
  }
  

  render(){

    const { selectedGame } = this.props;
    //console.log(selectedGame);
    let message;
    if (!selectedGame) {
      message = <h2>Game is loading...</h2>;
    }
   
    return(
      <div className='gameBoard-panel'>
        {message}
        <h3>Game board will appear here!</h3>
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

