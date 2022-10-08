import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LoginComponent from './Components/Login/LoginComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div className={`app-app--is-login`}>
    <LoginComponent 
        onSubmit ={()=> {console.log("submit")}}/>
    </div>
);


