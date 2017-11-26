import React, { Component } from 'react';
import axios from 'axios';

class GameBoard extends Component {
  constructor(props){
    super(props)
    this.state={
      game:{}
    }
  }

  render(){
    return(
      <div className='gameBoard-panel'>
        <h1>Game board will appear here!</h1>
      </div>
    )
  }
}

export default GameBoard;
