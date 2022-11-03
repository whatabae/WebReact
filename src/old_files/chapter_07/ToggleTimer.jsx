import { useState } from "react";
import Timer from "./Timer"

function ToggleTimer(){
    const [showTimer, setShowTimer] = useState(false); //useState를 false로 컴포넌트 생성X
    return(
        <div>
            <header>
                {showTimer && <Timer/>}
                <button onClick={()=>setShowTimer(!showTimer)}>토글 타이머</button>
            </header>
        </div>
    );
}

export default ToggleTimer;