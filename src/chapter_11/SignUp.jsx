import React,{useState} from "react";
import './SignUp.css';

function SignUp(props){
    const [name, setName] =useState("");
    const [gender, setGender] = useState("남자");
    const [tavalue, setTaValue] = useState("요청사항을 입력하세요.");

    const handleChangeName = (event) =>{
        setName(event.target.value);
    };
    
    const handleChangeTextArea = (event) =>{
        setTaValue(event.target.value);
    };
    
    const handleChangeGender = (event) =>{
        setGender(event.target.value);
    };

    const handleSubmit = (event) => {
        alert(`이름 : ${name}, 성별 : ${gender}, 요청사항 :${tavalue}`);
        event.preventDefault();
    };

    return(
        <form onSubmit={handleSubmit}>
            <label>
                이름:
                <input type="text" value={name} onChange={handleChangeName}></input>
            </label>
            <br></br>

            <label>
                성별:
                <select value={gender} onChange={handleChangeGender}>
                    <option value="남자">남자</option>
                    <option value="여자">여자</option>
                </select>
            </label>
            <br></br>

            <label>
                요청사항:
                <textarea value={tavalue} onChange={handleChangeTextArea}></textarea>
            </label>
            <button type="submit">제출</button>
        </form>
    );
}

export default SignUp;