import React from "react";
import {connect} from "react-redux";
import {ContactForm} from "./ContactForm";
import {ContactRow} from "../components/ContactRow";

class App extends React.Component {
    
    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <h2>Contacts</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-6">
                        <table className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.props.contacts.map((contact) => {
                                        var rowClass='';
                                        if (this.props.selected === contact.id) {
                                            rowClass = 'selected';
                                        }
                                        return (
                                            <ContactRow
                                                key={contact.id}
                                                contact={contact}
                                                rowClass={rowClass}
                                                selectContact={this.props.selectContact}
                                            />
                                        );
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="col-xs-6">
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
        contacts: state.contacts,
        selected: state.selected
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addContact: (contact) => {
            dispatch({
                type: "ADD_CONTACT",
                payload: contact
            });
        },
        selectContact: (id) => {
            dispatch({
                type: "SELECT_CONTACT",
                payload: id
            });
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);