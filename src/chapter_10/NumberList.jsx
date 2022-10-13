import React from "react";

function NumberList(props){
    const {numbers} =props;
    
    const listitems = numbers.map((number)=> <li key={number.toString()}>{number}</li>);
    const listitems2 = numbers.map((number, index)=> <li key={index}>{number}</li>);

    return(
        <div>
            <ul>{listitems}</ul>
            <Seperator/>
            <ul>{listitems2}</ul>
        </div>
    )

    function Seperator(){
        return <hr></hr>;
    }
}

export default NumberList;