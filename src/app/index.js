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

const initialState = {
    result: 1,
    lastValues: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD":
            state = {
                ...state,
                result: state.result + action.payload,
                lastValues: [...state.lastValues, action.payload]
            };
            
            break;
        case "SUBTRACT":
            state = {
                ...state,
                result: state.result - action.payload,
                lastValues: [...state.lastValues, action.payload]
            };
            
            break;
    }
    return state;
};

const store = createStore(reducer);

store.subscribe(() => {
    console.log("Store updated!", store.getState());
});

store.dispatch({
    type: "ADD",
    payload: 100
});

store.dispatch({
    type: "ADD",
    payload: 8
});

store.dispatch({
    type: "SUBTRACT",
    payload: 10
});