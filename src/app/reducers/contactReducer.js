export default contactReducer = (state = {
    title: "",
    firstName: "",
    lastName: ""
}, action) => {
    switch (action.type) {
        case "SET_TITLE":
            state = {
                ...state,
                title: action.payload
            };
            break;
        case "SET_FIRST_NAME":
            state = {
                ...state,
                firstName: action.payload
            };
            break;
        case "SET_LAST_NAME":
            state = {
                ...state,
                lastName: action.payload
            };
            break;
    }
    return state;
};

