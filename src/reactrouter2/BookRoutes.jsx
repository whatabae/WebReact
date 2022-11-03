import { Routes, Route } from "react-router-dom";
import NewBook from './NewBook';
import Book from './Book';
import BookList from '/.BookList';
import BookLayout from './BookLayout';
import './SecondRouter.css';

function BookRoutes(){
    return(
        <div className="content">
            <BookLayout />
                <Routes>
                    <Route index element={<BookList></BookList>}></Route>
                    <Route path=':id' element={<Book></Book>}></Route>
                    <Route path='new' element={<NewBook></NewBook>}></Route>
                </Routes>
        </div>
    )
}

export default BookRoutes;