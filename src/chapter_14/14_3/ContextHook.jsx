
import React, {useContext} from "react";

const ThemeContext = React.createContext('light');


function ContextHook(){
    return(
        <ThemeContext.Provider value="lavender">
            <Toolbar></Toolbar>
        </ThemeContext.Provider>
    )
}

function Toolbar(){
    return(<div>
        <ThemeButton></ThemeButton>
    </div>)
}

function ThemeButton(){
    return(<div>
        <Button></Button>
    </div>)
}

function Button(){
    const value = useContext(ThemeContext);
    return(
        <div>
        <div style={{margin:50, padding:50, backgroundColor:value,}}>
                <p>컨텍스트를 가지고 데이터를 전달하는 예시</p>
                <button>확인</button>
        </div>
        </div>
    )
}

export default ContextHook;