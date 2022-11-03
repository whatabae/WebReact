import React from "react";
import "./Toolbar.css"

function Toolbar(props){
    const {isLoggedIn, onClickLogin, onClickLogout} = props;

    return(
        <div id="wrapper">
            {isLoggedIn && <span id="greeting">환영합니다!</span>}

            {isLoggedIn ? (<button onClick={onClickLogout}>로그아웃</button>)
                        : (<button onClick={onClickLogin}> 로그인 </button>)}
        
        </div>
    )
}

export default Toolbar;