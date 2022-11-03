import React from "react";

function EventParam(){
    const onClickHandler = (event)=> alert(event.target.value);

    return(
        <button value={"아닙니다!"}
        onClick ={(event)=>onClickHandler(event)}>
            맞습니까?
        </button>
    )
}
export default EventParam;