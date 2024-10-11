import React from "react";
function Square(props){
    return (
        <div>
    <button 
    className='square'
    onClick={props.onClick}
    style={{border:'1px solid',
        height:"100px",
        width:"100px"
    }} 
     >{props.value}</button>
    </div>
    );
  }
  export default Square;