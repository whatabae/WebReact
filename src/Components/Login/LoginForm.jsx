import React from "react";
import Input from "./Input";
import "./LoginComponent.css";

function LoginForm(props){
    return(
        <form
            onSubmit={()=>{
                let id = document.getElemnetById("username").value.toStirng();
                let pass = document.getElemnetById("password").value.toStirng();
                props.onSubmit(id, pass);
            }}>
        <div className="form-block__input-wrapper">
            <div className="form-group form-group--login">
                <Input type="text" id="username" label="아이디"
                    disabled={props.mode==="signup"}></Input>
                <Input type="password" id="password" label="비밀번호"
                    disabled={props.mode==="signup"}></Input>
            </div>
            <div className="form-group form-group--signup">
                <Input type="text" id="fullname" label="아이디"
                    disabled={props.mode==="login"}></Input>
                <Input type="email" id="email" label="이메일 주소"
                    disabled={props.mode==="login"}></Input>
                <Input type="password" id="createpassword" label="비밀번호"
                    disabled={props.mode==="login"}></Input>
                <Input type="password" id="repeatpassword" label="비밀번호 한번더"
                    disabled={props.mode==="login"}></Input>
            </div>
            </div> 
            <button className="button button--primary full-width" type="submit">
                {props.mode === "login" ? "Log in" : "Sign Up"}
            </button>
        </form>
    );
}

export default LoginForm;