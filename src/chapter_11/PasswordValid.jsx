import React, {useState, useEffect} from "react";
import './SignUp.css'

function PasswordValid(props){
    const [passwd, setPasswd] =useState("");
    const [passwdErr, setPasswdErr] = useState("");
    const [displayErr, setDisplayErr] =useState(false);

    const handleChangePasswd = (event) => {
        setPasswd(event.target.value);
    };

    const validationPassword = ()=> {
        if(passwd.length<4){
            console.log("비밀번호 문자수가 부족합니다.")
        }
    }
}