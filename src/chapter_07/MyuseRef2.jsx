import React, {useEffect, useRef} from "react";

function MyuseRef2(){
    const inputRef = useRef();

    useEffect(()=>{
        console.log(inputRef);
        inputRef.current.focus();
    },[]);

    const login = () =>{
        alert(`로그인 ID : ${inputRef.current.value}`);
        console.log(`입려 : ${inputRef.current.value}`);
        inputRef.current.focus();
    };

    return(
        <div>
            <input ref={inputRef} type="text" placeholder="자동포커스"></input>
            <button onClick={login}>Login</button>
        </div>
    );
}

export default MyuseRef2;