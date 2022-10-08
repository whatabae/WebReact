import React, {useState, useEffect} from "react";
import useCounter from "./useCounter";

const MAX_CAPACITY =10;

function Accommodate(props){
    const [isFull, setIsFull] = useState(false);
    const [count, increaseCount, decreaseCount] = useCounter(0);

    useEffect(()=>{console.log(`===1.useEffect(f):(정원초과? ${isFull})`)});//렌더링이 될때마다
    useEffect(()=>{ console.log("===2.useEffect(f,[]) mount호출됨"); //mount, unmpunt 될때 마다
                    return()=>{console.log("===4.useEffect(f,[]) unmount호출됨");};},[]);
    useEffect(()=> {setIsFull(count>=MAX_CAPACITY); //의존성 배열이 변화 할때마다
                    console.log(`===3.useEffect(f,[count]): 입장인원 ${count}`);}, [count]);
    return(
        <div style={{padding:16}}>
            <p>{`정원 10명중 불라불라 총 ${count}명 수용했습니다.`}</p>
            <button onClick={increaseCount} disabled={isFull}> 입장 </button>
            <button onClick={decreaseCount}>퇴장</button>
            {isFull&&<p style={{color:"red"}}>정원이 가득 찼습니다.</p>}
        </div>
    );
}

export default Accommodate;