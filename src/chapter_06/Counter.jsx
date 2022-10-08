import React from "react";
import { useState } from "react";

const Counter = () =>{
    const [count, setState] = useState(0);

    const onIncrease = () =>{
        setState((count)=>count+1);
    };

    return(
        <div>
            <h2> 카운터 값 : {count} </h2>
            <hr></hr>
            <button onClick={onIncrease}>♥</button>
        </div>
    );
};

export default Counter;