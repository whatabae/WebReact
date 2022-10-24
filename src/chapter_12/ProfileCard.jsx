import React from "react";
import Card from "./Card";
import './ProfileCard.css';

function ProfileCard(props){
    return(
        <Card title="Inje Lee" backgroundColor = "#4ea04e">
            <p>이 부분은 현재 Card 엘리먼트에 포함된 하위 엘리먼트(=child)입니다.</p>
            <p>이부분도 child element 입니다.</p>
            <p> 여러개의 하위 엘리먼트를 이런식으로 합성할수 있습니다.</p>
        </Card>
    )
}

export default ProfileCard;