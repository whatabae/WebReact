import React, {useState} from "react";
import TemperatureInput from "./TemperatureInput";
import BoilingVerdict from "./BoilingVerdict";

function toCelsius(fahrenhiet){
    return ((fahrenhiet-32)*5)/9;
}

function toFahrenhiet(celsius){
    return (celsius*9)/5 +32;
}

function tryConvert(temperature, convert){
    const input = parseFloat(temperature);
    if(Number.isNaN(input)){
        return "";
    }
    const output = convert(input);
    const rounded = Math.round(output*1000)/1000;
    return rounded.toString();
}

function Calculator(props){
    const [temperature, setTemperature] = useState(" ");
    const [scale, setScale] = useState("c");

    const handleCelsiusChange=(temperature)=>{
        setTemperature(temperature);
        setScale("c");
    }

    const handleFahrenheitChange = (temperature)=>{
        setTemperature(temperature);
        setScale("f");
    };

    const celsius = scale === "f"? tryConvert(temperature,toCelsius): temperature;
    const fahrenhiet = scale === "c" ? tryConvert(temperature, toFahrenhiet): temperature;

    return(
        <div>
            <TemperatureInput
            scale="c"
            temperature={celsius}
            onTemperatureChange={handleCelsiusChange}>   
            </TemperatureInput>

            <TemperatureInput
                scale="f"
                temperature={fahrenhiet}
                onTemperatureChange = {handleFahrenheitChange}
            ></TemperatureInput>
            <BoilingVerdict celsius={parseFloat(celsius)}></BoilingVerdict>
        </div>
    )
}

export default Calculator;