import React, { StrictMode } from "react";
import { useState } from "react";

function Square() {

  const [value, setValue] = useState(null); 

  function handleClikc() {
    setValue("X");
  }

  return (<button 
    className="square" 
    onClick={handleClikc}
    >{value}</button>
    );
}

export default function Board() {
  return (
    <div>
      <div className="board-row">
        <Square/>
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </div>
    );
}