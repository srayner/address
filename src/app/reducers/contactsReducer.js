const contactsReducer = (state = {
    contacts: [
        {id: 1, firstName: "Fred"},
        {id: 2, firstName: "Bill"},
        {id: 3, firstName: "Alex"},
        {id: 4, firstName: "Sarah"}
    ]
}, action) => {
    switch (action.type) {
        case "ADD_CONTACT":
            var contacts = this.state.contacts.slice();
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