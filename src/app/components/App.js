import React from "react";

import {ContactForm} from "./ContactForm";
import {ContactRow} from "./ContactRow";

export class App extends React.Component {
    
    constructor() {
        super();
        this.state = {
            contacts: [
                {id: 1, firstName: "Fred"},
                {id: 2, firstName: "Bill"},
                {id: 3, firstName: "Alex"},
                {id: 4, firstName: "Sarah"}
            ]
        };
    }
    
    addContact(contact) {
        var contacts = this.state.contacts.slice();
        contacts.push(contact);
        console.log(contacts);
        this.setState({
            contacts: contacts
        });
        console.log(this.state);
    }

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <h2>Contacts</h2>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.contacts.map((contact) => {
                                        return <ContactRow key={contact.id} contact={contact}/>;
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <ContactForm addContact={this.addContact.bind(this)}/>        
                    </div>
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        contacts: state.contacts
    };
}