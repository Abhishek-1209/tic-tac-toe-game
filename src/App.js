import React from 'react';
import { useState } from 'react';
import Square from './Square';
import './App.css';

function Board() {
  const [state,setState]=useState(Array(9).fill(null));
  const[isXTurn,setIsXTurn]=useState(true);
  const handleClick=(index)=>{
    if(state[index]!=null){
      return;
    }
    const copyState=[...state];
    copyState[index]=isXTurn?"X":"o";
    setState(copyState);
    setIsXTurn(!isXTurn);
  };
  const checkWinner=()=>{
    const winnerLogic=[
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,8],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ];
    for(let logic of winnerLogic){
      const[a,b,c]=logic;
      if(state[a]!==null&&state[a]===state[b]&&state[b]===state[c])
      {return state[a];}
    }
    return false;
  }
  const handleReset=()=>{
    setState(Array(9).fill(null));
  }
  const isWinner=checkWinner();
  const isDraw = state.every(square => square !== null) && !isWinner;
  return (
    <>
    <div className='board-conatiner'>
      {isWinner?(
        <> <div className='winner-message'>{isWinner} won the game   
      <button  className="play-again-button" onClick={handleReset}> Play Again</button>
      </div>
      </>):isDraw ? (
        <div className="winner-message">
          <h4>It's a draw!</h4>
          <button className="play-again-button" onClick={handleReset}>Play Again</button>
        </div>
      ) :
      <>
      <h4> Player {isXTurn?"X":"o"} please move</h4>
      <div class="board-row">
      <Square onClick={()=>handleClick(0)} value={state[0]}/>
      <Square onClick={()=>handleClick(1)} value={state[1]} />
      <Square onClick={()=>handleClick(2)} value={state[2]}/>
      </div>
      <div className='board-row'>
      <Square onClick={()=>handleClick(3)} value={state[3]}/>
      <Square onClick={()=>handleClick(4)} value={state[4]}/>
      <Square onClick={()=>handleClick(5)} value={state[5]}/>
      </div>
      <div className='board-row'>
      <Square onClick={()=>handleClick(6)} value={state[6]}/>
      <Square onClick={()=>handleClick(7)} value={state[7]}/>
      <Square onClick={()=>handleClick(8)} value={state[8]}/>
        </div>
        </>
        }
        </div>
    </>
  );
};
function App() {
  return (
    <div>
      <Board/>
    </div>
  );
};
export default App;
