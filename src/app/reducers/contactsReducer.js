const initialState = {
    contacts: [
        {id: '1',  firstName: 'Fred'},
        {id: '2',  firstName: 'Bill'},
        {id: '3',  firstName: 'Hayley'},
        {id: '4',  firstName: 'Sookie'}
    ]
};

const contactsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_CONTACT":
            state = {
                ...state,
                contacts: [...state.contacts, action.payload]
            };
            break;
    }
    return state;
};

export default contactsReducer;