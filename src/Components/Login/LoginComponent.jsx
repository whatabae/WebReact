import React, {useState} from "react";
import LoginForm from "./LoginForm"
import "./LoginComponent.css";

function LoginComponent(props){
    const [mode, setMode] = useState("login");

    const toggleMode = ()=>{
        setMode(mode==="login" ? "signup" : "login");
    }

    const onSubmit =(myid, mypass) =>{
        console.log("Click Login button");
        alert(myid + "\n" + mypass);
    };
    return(
        <div><div className={`form-block-wrapper form-block-wrapper--is-${mode}`}></div>
            <section className={`form-block form-block--is-${mode}`}>
                <header className="form-block__header">
                    <h1>{mode==="login" ? "로그인" : "회원가입"}</h1>
                    <div className="form-block__toggle-block">
                        <span>
                            {mode === "login" ?"계정이 없으면":"계정이 있다만 ..."}
                            이곳을 클릭하세요!
                        </span>
                        <input id="form-toggler" type="checkbox" onClick={toggleMode}></input>
                        <label htmlFor="form-toggler"></label>
                    </div>
                </header>
                <LoginForm mode={mode} onSubmit={onSubmit}></LoginForm>
            </section>
        </div> 
    );
}

export default LoginComponent;