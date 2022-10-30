import React from "react";

function Dialog(props){
    return(
        <div color="blue">
            <h1 className="Dialog-title">
                {props.title}
            </h1>
            <p className="Dialog-message">
                {props.message}
            </p>
        </div>
    );
}

function WelcomeDialog(props){
    return(
        <Dialog
        title ="어서오세요"
        message = "우리사이트에 오신것을 환영합니다."
        ></Dialog>
    );
}


export default WelcomeDialog;