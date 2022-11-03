import React, {useState, useRef} from "react";

function MyuseRef(){
    const [renderer, setRenderer] = useState(0);
    const countRef = useRef(0);
    let countVar = 0 ;

    const doRendering = () => {
        setRenderer(renderer +1);
        console.log("State 변수 : ", renderer);
    };

    const increseRef = () =>{
        countRef.current = countRef.current+1;
        console.log("ref변수 : ", countRef.current);
    };

    const increseVar = () =>{
        countVar =countVar +1;
        console.log("변수 : ", countVar);
    };

    return(
        <div>
            <button onClick={doRendering}> state변수 + (렌더링) </button> {renderer} <br />
            <button onClick={increseRef}> Ref변수+ </button> {countRef.current} <br />
            <button onClick={increseVar}> 변수+ </button> {countVar} <br />
        </div>
    )
}

export default MyuseRef;