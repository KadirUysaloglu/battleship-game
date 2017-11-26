import React, { Component } from 'react';
import GameList from './components/gameList.js';
import GameBoard from './components/gameBoard.js';

class App extends Component {

  render() {
    return (
      <div className='wrapper'>
        <GameList />
        <GameBoard />
      </div>         
    );
  }
}

export default App;
