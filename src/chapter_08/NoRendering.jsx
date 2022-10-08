import React, {useState} from "react";

function WarningBanner(props){
    if(!props.warning) {return null;}
    return <div> 경고! </div>
}

function NoRendering(props){
    const [showWarning, setShowWarning] = useState(false);

    const handleToggleClick = () =>{
        setShowWarning((showWarning)=>!showWarning);
    };

    return(
        <div>
            <WarningBanner warning = {showWarning}></WarningBanner>
            <button onClick={handleToggleClick}>{showWarning ? "감추기" : "보이기"}</button>
        </div>
    )
}

export default NoRendering;