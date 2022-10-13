import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ToDoList from './chapter_10/ToDoList';

const root = ReactDOM.createRoot(document.getElementById('root'));
//const numbers = [1,2,3,4,5];

root.render(
    <div>
    <ToDoList/>
    </div>
);