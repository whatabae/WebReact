import React, {useState} from "react";
import Greeting from "./Greeting";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

function LoginCont(){
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleLoginClick =() => setIsLoggedIn(true);
    const handleLogoutClick =() => setIsLoggedIn(false);

    return(
        <div>
            <Greeting isLoggedIn = {isLoggedIn}></Greeting>
            {isLoggedIn ? (<LogoutButton onClick={handleLogoutClick}></LogoutButton>)
            : (<LoginButton onClick={handleLoginClick}></LoginButton>)}
        </div>
    )
}

export default LoginCont;