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
            var contacts = state.contacts.slice();
            contacts.push(action.payload);
            state = {
                ...state,
                contacts: contacts
            };
            break;
    }
    return state;
};

export default contactsReducer;