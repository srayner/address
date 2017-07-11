//import React from "react";
//import {render} from "react-dom";
//import {Provider} from "react-redux";
//import {App} from "./components/App";
//import store from './store';
//
//render(
//    <Provider store={store}>
//        <App/>
//    </Provider>//,
//    window.document.getElementById("app")
//);

import {createStore} from "redux";

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            state = state + action.payload;
            break;
        case "SUBTRACT":
            break;
    }
    return state;
};

const store = createStore(reducer, 1);

store.subscribe(() => {
    console.log("Store updated!", store.getState());
});

store.dispatch({
    type: "ADD",
    payload: 10
});