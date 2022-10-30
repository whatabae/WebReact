import React from "react";


function Dialog(props){ //범용 다이얼로그
    const styles = {
        wrapper:{
            border: `1px solid ${props.bordercolor}`,
            borderRadius: 16,
            margin: 16,
            display : "flex",
            justifyContent:`${props.align}`,
            background_color: `${props.backgroundcolor}`
        },
        text_att:{
            color: `${props.color}`
        },
        btn_att:{
            margin:20,
            display: `${props.btn}`
        }

    }

    return(
        <div style={styles.wrapper}>
            <h1 style={styles.text_att}>
                {props.title}
            </h1>
            <p>
                {props.message}
            </p>
            <button style={styles.btn_att}>확인</button>
        </div>
    );
}

function WelcomeDialog(props){//경고, 인사말, 오류, 공지사항
    return(
        <div> 
        <Dialog
        title ="경고!"
        message = "지금 진입 중인 사이트는 안전하지 않습니다!"
        bordercolor = "red"
        color = "red"
        backgroundcolor = "red"
        align = "center"
        
        ></Dialog>

        <Dialog
        title ="어서오세요"
        message = "우리사이트에 오신것을 환영합니다."
        bordercolor = "green"
        color = "#487e02"
        align = "left"
        btn = "none"
        ></Dialog>

        <Dialog
        title ="오류!"
        message = "ErrorCode : 0023x114, 오류가 발생했습니다"
        bordercolor = "Blue"
        color = "#02487e"
        align = "right"
        ></Dialog>

        <Dialog
        title ="공지사항"
        message = "저희 사이트는 지금 할인행사를 진행중입니다."
        bordercolor = "#0e6fbc"
        color = "#24acf2"
        btn = "none"
        ></Dialog>

        </div>
    );
}


export default WelcomeDialog;