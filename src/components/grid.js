import React, { Component } from 'react';
import { fire ,selectGame} from '../actions';
import { connect } from 'react-redux';
import './grid.css';

class Grid extends Component {
   render(){
   let board=this.props.data.board;
   return (
      board.battle ? (
         <table>
            <tbody>
               <tr>
                  <th></th>
                  {board.battle && board.battle.battlefield.map((d,i) =>
                     <th key={i}>{i}</th>
                  )}
               </tr>
               {board.battle && board.battle.battlefield.map((d,i) =>
                  <tr key={i}>
                     <th>{i}</th>
                     {board.battle && board.battle.battlefield[i].map((d2,i2) =>
                        <td key={i2} className={`cellBg-${d2}`} onClick={(e)=>{
                          this.props.fire(this.props.data.gameId,i,i2);
                        }}>{d2}</td>
                     )}
                  </tr>
               )}
            </tbody>
         </table>
      ) : (
         null
      )
    );
  }

}

export default connect(null, { fire ,selectGame} )(Grid);
