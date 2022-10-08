import React, {useState, useEffect} from "react"; //import 모듈

function Toggle(props){

    const[isToggleOn, setisToggle] = useState(true); //State 변수 선언 
    
    function handleClick(){ // 함수 선언 
        setisToggle((isToggleOn)=>!isToggleOn); //State 변수 set
        console.log("토글 상태 : ", isToggleOn); //콘솔 로그  isToggleOn State 상태 반환 
    }
    useEffect(()=>{console.log(`렌더링됨, isToggleOn : ${isToggleOn}`)}); //use Effect 렌더링 될때마다 return
    return <button onClick={handleClick}> 
        {isToggleOn ? "클릭 A": "클릭 B"}
    </button>//handClick 클릭시 onClick이 실행되고 handleClick 호출 되고 isToggleOn의 T/F로 클릭 A랑 클릭 B가 실행된다.
}

export default Toggle;