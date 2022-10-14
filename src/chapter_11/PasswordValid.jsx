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
            console.log("비밀번호 문자수가 부족합니다.", passwd.length);
            setPasswdErr(`비밀번호 문자수가 부족합니다. (카운트: ${passwd.length})`);
            setDisplayErr(true);
        }
        else{
            console.log("비밀번호 문자수가 정상입니다. : ", passwd.length);
            setPasswdErr(``);
            setDisplayErr(false);
        }
    }

    useEffect(validationPassword, [passwd]);

    const handleSubmit = (event) =>{
        alert(`비밀번호: ${passwd}`);
        event.preventDefault();
    };

    return(
        <form onSubmit={handleSubmit}>
            <label>
                비밀번호(최소4자 이상조건):
                <input type="password" value={passwd} onChange={handleChangePasswd}></input>
            </label>
            <br></br>
            {displayErr ? (<p style={{color:"red"}}>{passwdErr}</p>) : (<></>)}

            <button type="submit"> 제출 </button>
        </form>
    )
}

export default PasswordValid;