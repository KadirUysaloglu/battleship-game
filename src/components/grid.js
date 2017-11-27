import React, { Component } from 'react';

import './grid.css';

const Grid = ({data}) => {
   return (
      data.battle ? (
         <table>
            <tbody>
               <tr>
                  <th></th>
                  {data.battle && data.battle.battlefield.map((d,i) => 
                     <th key={i}>{i}</th>
                  )}        
               </tr>
               {data.battle && data.battle.battlefield.map((d,i) => 
                  <tr key={i}>
                     <th>{i}</th>
                     {data.battle && data.battle.battlefield[i].map((d2,i2) => 
                        <td key={i2} className={`cellBg-${d2}`}>{d2}</td>
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

export default Grid;

