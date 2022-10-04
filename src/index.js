import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";


// import Useref from "./Useref"
// import Useeffect from "./Useeffect";
// import Text from "./Text";
// import Fetch from "./Fetch";
// import App from "./App";
// import UR from "./UR";
import Router from "./Router";
import {Provider} from "react-redux";
import Store from "./Store"

// import Component1 from './components/Component1';

const root=ReactDOM.createRoot(document.getElementById("root")); 
root.render(
    <React.StrictMode>

        <BrowserRouter>
        <Provider Store ={Store}>
           <Router/>
        </Provider>
    
        </BrowserRouter>
    </React.StrictMode>
);



