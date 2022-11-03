import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './FirstRouter.css';
import Home from './Home';
import About from './About';
import Profile from './Profile';

function FirstRouter(){
    return(
        <BrowserRouter>
        <nav>
            <Link to ={'/'} className="item">Home</Link>
            <Link to ={'about'} className="item">About</Link>
            <Link to ={'/profile'} className="item">Profile</Link>
        </nav>
        <Routes>
            <Route path="/" element= {<Home/>}></Route>
            <Route path="/home" element= {<Home/>}></Route>
            <Route path="/about" element= {<About/>}></Route>
            <Route path="/profile" element= {<Profile/>}></Route>
        </Routes>
        <footer>(C)opyright 모바일웹</footer>
        </BrowserRouter>
    )
}

export default FirstRouter;