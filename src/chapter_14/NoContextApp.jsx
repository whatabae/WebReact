import React from "react";

function NoContextApp(){
    return(
        <Toobar theme = 'yellow'></Toobar>
    )
}

function Toobar(props){
    return(<div>
        <ThemeButton theme = {props.theme}></ThemeButton>
    </div>)
}

function ThemeButton(props){
    return(<div>
        <Button theme = {props.theme}></Button>
    </div>)
}

function Button(props){
    const myColor = props.theme;
    return(<div style={{backgroundColor: myColor, margin:50, padding:50}}>
        <p>컨텍스트 없이 props만으로 데이터를 전달하는 예</p>
        <button>확인</button>
    </div>)
}

export default NoContextApp;