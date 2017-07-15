const initialState = {
    contacts: [
        {id: '1',  firstName: 'Fred'},
        {id: '2',  firstName: 'Bill'},
        {id: '3',  firstName: 'Hayley'},
        {id: '4',  firstName: 'Sookie'}
    ],
    selected: 0,
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
        case "REMOVE_CONTACT":
            state = {
                ...state,
                contacts: state.contacts.filter(contact => action.payload !== contact),
            }
            if (state.selected > state.contacts.length - 1) {
                state.selected = state.contacts.length - 1;
            }
            console.log(state.selected);
            break;
        case "SELECT_CONTACT":
            state = {
                ...state,
                selected: state.contacts.findIndex(contact => action.payload === contact),
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