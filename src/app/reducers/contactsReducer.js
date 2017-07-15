const initialState = {
    contacts: [
        {id: '1',  firstName: 'Fred'},
        {id: '2',  firstName: 'Bill'},
        {id: '3',  firstName: 'Hayley'},
        {id: '4',  firstName: 'Sookie'}
    ],
    selected: {id: '1',  firstName: 'Fred'},
    editing: false
};

const contactsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_CONTACT":
            state = {
                ...state,
                contacts: [...state.contacts, action.payload]
            };
            break;
        case "SELECT_CONTACT":
            state = {
                ...state,
                selected: action.payload
            };
            break;
        case "EDIT_MODE":
            state = {
                ...state,
                editing: action.payload    
            };
            break;
    }
    return state;
};

export default contactsReducer;