import React from "react";
import "./Airbnb.css";
import {Airbnb_list} from "./Airbnb_list";

function City(props){//ui 구성 
    return(
        <div>
            <div>
                <img src={props.img} alt ="사진"></img>
            </div>
            <div>
                <h2>{props.title}</h2>
                <span>{props.distance}km 거리</span>
            </div>
        </div>
    );
}

function Airbnb(){
    return(
        <div>
            {Airbnb_list.map((city)=>{
                return <City img={city.img}
                        title={city.title}
                        color={city.color}
                        distance={city.distance}>
                        </City>
            })}
        </div>
    )

}
export default Airbnb;