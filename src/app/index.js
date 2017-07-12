import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import App from "./components/App";
//import store from './store';


import {createStore} from "redux";

const initialState = {
    contacts: [
        {id: '1',  firstName: 'Fred'},
        {id: '2',  firstName: 'Bill'},
        {id: '3',  firstName: 'Hayley'}
    ]
};

const reducer = (state = initialState, action) => {
    return state;
};

const store = createStore(reducer);
console.log(store.getState());

store.subscribe(() => {
    console.log("Store updated!", store.getState());
});

render(
    <Provider store={store}>
        <App/>
    </Provider>, window.document.getElementById("app"));