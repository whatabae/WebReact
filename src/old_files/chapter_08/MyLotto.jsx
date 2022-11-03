import React, {useRef, useEffect} from "react"; //module import

function MyLotto(){
    const numOfLotto = useRef(1); //ref 변수 선언

    const handler = (str, event) =>{//이벤트 핸들러 파라미터 2개 
        console.log(numOfLotto.current.toString()+"회차"+str+event.target.value);//ref 변수는 객체임으로 current를 사용해서 참조
        alert(numOfLotto.current.toString()+"회차"+str+event.target.value);//alert 창 
        numOfLotto.current = numOfLotto.current+1;
    };

    useEffect(()=>{console.log(`>>> 렌더링되었습니다. !!!`)});//렌더링이 될때마다
    useEffect(()=>{ console.log(">>> 마운트되었습니다 !!!"); //mount될때 
                    return()=>{console.log(">>> 언마운트되었습니다 !!!");};},[]);//unmount 될때
    
    return(
        <button
            value="홍길동" //value 값 클릭시 event 헨들러 호출
            onClick={(event)=>handler("당첨자 : ", event)}> 
                당첨자 확인
            </button>
    )
}

export default MyLotto;