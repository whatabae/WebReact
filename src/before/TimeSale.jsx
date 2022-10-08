import React from "react";
import "./TimeSale.css"; //css 파일 불러옴
import {Product_list} from "./Product_list"; //product_list(물건 항목) 불러옴

/*class ConfrimButton extends React.Component{ //버튼
    constructor(props){
        super(props);
        this.state={isConfirmed:false};
        this.handleConfirm = this.handleConfirm.bind(this);
    }

}*/

function getDeadline(endDate){
    let dead = new Date(endDate);/*마감시간을 설정*/
    let current = new Date();
    let deadline =dead.getTime() -current.getTime();
    let hour = Math.floor(deadline / (1000*60*60)); //시간 계산
    let min = Math.floor((deadline % 1000*60*60)/(1000*60)); //분계산
    let sec = Math.floor((deadline % (1000*60*60))%(1000*60)/1000) //초 계산
    return hour.toString(10)+":"+min.toString(10)+":"+sec.toString(10); //10진수 문자열로 표기
}

function Card(props){ //버튼이 script 형식으로 들어감
    return(
        <div className="card">
            <img src={props.img} className="cardimg" alt="product"></img>
            <div className="cardbody">
                <h2 className="cardtime">{props.time} 마감예정! </h2>
                <h2 className="cardtitle">{props.title}</h2>
                <p className="carddescription">{props.description}</p>
                <h3 className="cardprice">
                    <del style={{color: "gray", marginRight: "0.6rem"}}>{props.oldprice}</del>{props.price}
                </h3>
            </div>
        </div>
    );
}
class ConfrimButton extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isConfirmed: false,
        };
        this.handleConfirm = this.handleConfirm.bind(this);
    }
    handleConfirm(){
        this.setState((prevState)=>({
            isConfirmed: !prevState.isConfirmed,
        }));
    }
    render(){
        return (
            <button onClick={this.handleConfirm} disabled={this.state.isConfirmed}>
                {this.state.isConfirmed ? "구매성공!!" : "긴급구매"}
            </button>
        );
    }
}


function TimeSale(props){
    return (
        <div className="wrapper">
        {Product_list.map((item, index)=>{//map 함수 이용해서 Product_list에 있는 항목들을 순차적으로 꺼냄
            return(
                <Card
                img ={item.img} //사진
                time = {getDeadline(item.time_deadline)} //시간
                title = {item.title} //이름
                description = {item.description} //설명
                oldprice = {item.oldprice} //할인 전 가격
                price = {item.price} //할인 된 가격
                >
                </Card>
            )
        })}
        </div>
    );
}
export default TimeSale;