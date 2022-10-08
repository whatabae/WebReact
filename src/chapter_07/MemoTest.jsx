import React, {useState, useMemo} from "react";

function MemoTest(){
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);
    const doubleNumber = useMemo( ()=> {return cpuload(number);}, [number]);

    const themeStyles = {backgroundColor : dark ? "black" : "white",
                        color : dark ? "white" : "black"};
    return(
        <div>
            <input type="number" value ={number} onChange={
                (e)=> setNumber(parseInt(e.target.value))
            }></input>
            <button onClick={()=>setDark((dark)=>!dark)}>Change Theme</button>
            <div style={themeStyles}>{doubleNumber}</div>
        </div>
    );
}

function cpuload(num){
    console.log("cpuload 함수 호출됨");
    for (let i = 0; i<3000000000; i++){ }
    return num*2;
}

export default MemoTest;