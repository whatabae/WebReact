import React,{useState, useRef, useEffect} from "react";
import Greeting from "./Greeting";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import "./LoginControl.css";

function LoginControl(){
    const btn_Counter = useRef(0);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleLoginClick = () => {setIsLoggedIn(true)};
    const handleLogoutClick = () => {setIsLoggedIn(false)};
    useEffect(()=> { 
        console.log(`LoggedIN : ${isLoggedIn}, 버튼클릭횟수 :${btn_Counter.current}`);
        btn_Counter.current=btn_Counter.current+1;},
        [isLoggedIn]);//의존성 배열이 변화 할때마다
        
    let button;

    if(isLoggedIn){button = <LogoutButton onClick={handleLogoutClick}></LogoutButton>;
    }else{button = <LoginButton onClick={handleLoginClick}></LoginButton>}

    return(
        <div className="login">
            <Greeting isLoggedIn={isLoggedIn}></Greeting> {button}
        </div>
    )
}

export default LoginControl;