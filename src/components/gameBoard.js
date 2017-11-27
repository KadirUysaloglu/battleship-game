import React, { Component } from 'react';
import { connect } from 'react-redux';

import Grid from './grid';


class GameBoard extends Component {
  constructor(props){
    super(props);
  }
  

  render(){
    const { selectedGame } = this.props;
    console.log(selectedGame);
    let message;
    if (!selectedGame) {
      message = <h2>Game is loading...</h2>;
    }
   
    return(
      <div className='gameBoard-panel'>
        {message}
        <h3>Game board will appear here!</h3>
        <Grid data={selectedGame} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { selectedGame: state.selectedGame};
}

export default connect(mapStateToProps)(GameBoard);

