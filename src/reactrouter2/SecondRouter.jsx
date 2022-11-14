import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './SecondRouter.css';
import Home from './Home';
import About from './About';
import BookRoutes from './BookRoutes';
import NotFound from './NotFound';

function SecondRouter(){
    return(
        <BrowserRouter>
        <nav>
            <Link to ={'/'} className="item">Home</Link>
            <Link to ={'about'} className="item">About</Link>
            <Link to ={'/books'} className="item">Books</Link>
        </nav>
        <Routes>
            <Route path="/" element= {<Home/>}></Route>
            <Route path="/about" element= {<About/>}></Route>
            <Route path="/books/*" element= {<BookRoutes/>}></Route>
            <Route path="*" element= {<NotFound/>}></Route>
        </Routes>
        <footer>(C)opyright 모바일웹</footer>
        </BrowserRouter>
    )
}

export default SecondRouter;