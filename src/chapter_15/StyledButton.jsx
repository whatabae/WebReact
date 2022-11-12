import styled from "styled-components";
import './DisplayFlex.css';

const StyleButton = styled.button`
    color:white;
    background-color: orange;
    font-size: 15px;
`;

const BlueButton = styled.button`
    color: white;
    background-color:blue;
    font-size: 15px;
`;

const MyButton = styled.button`
    color: white;
    background-color: yellow;
    font-size:15px;
`;

const YellowButton = styled(MyButton)`
    color : black;
`

function StyledButton(){
    return(
        <div>
            <div className="flexContainer5">
                <StyleButton> 스타일 버튼 </StyleButton>
                <BlueButton> 블루 버튼</BlueButton>
                <YellowButton>  노랑 버튼 </YellowButton>
            </div>
        </div>
    )
}

export default StyledButton;