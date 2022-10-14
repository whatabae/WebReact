import React, {useRef} from "react";
import './SignUp.css';

function UncontrolledForm(){
    const inputRef = useRef();

    const handleSubmit = (event) =>{
        alert('이름: ' + inputRef.current.value);
        console.log(inputRef.current.value);
        event.preventDefault();
    }

    return(
        <div>
            <form onSubmit={(e)=> handleSubmit(e)}>
                <label>
                    이름:
                    <input type="text" ref={inputRef}/>
                </label>
                <input type="submit" value="제출하세요"></input>
            </form>
        </div>
    )
}

export default UncontrolledForm;