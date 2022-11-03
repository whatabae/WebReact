import { useNavigate } from "react-router-dom";
import './SecondRouter.css';

function NotFound(){
    const navigate = useNavigate();

    setTimeout(()=>{navigate("/")},1000);

    return(
        <div className="error">Not Found 페이지 입니다.</div>
    )
}

export default NotFound;