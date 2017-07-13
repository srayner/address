import React from "react";
import {connect} from "react-redux";
import {ContactForm} from "./ContactForm";
import {ContactRow} from "../components/ContactRow";

class App extends React.Component {
    
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
                                    this.props.contacts.map((contact) => {
                                        return <ContactRow key={contact.id} contact={contact}/>;
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <ContactForm addContact={this.props.addContact}/>        
                    </div>
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    console.log('hello');
    return {
        contacts: state.contacts
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addContact: (contact) => {
            dispatch({
                type: "ADD_CONTACT",
                payload: contact
            });
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);