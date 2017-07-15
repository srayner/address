import React from "react";
import {connect} from "react-redux";
import {ContactForm} from "./ContactForm";
import {ContactRow} from "../components/ContactRow";
import {ContactDetail} from "../components/ContactDetail";

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
                                        if (this.props.contacts[this.props.selected].id === contact.id) {
                                            rowClass = 'info';
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
                    {!this.props.editing && (this.props.selected >= 0) && 
                        <div className="col-xs-6">
                            <ContactDetail
                                contact={this.props.contacts[this.props.selected]}
                                editMode={this.props.editMode}
                                removeContact={this.props.removeContact}
                            />        
                        </div>
                    }
                    {this.props.editing &&
                    <div className="col-xs-6">
                        <ContactForm
                            addContact={this.props.addContact}
                            editMode={this.props.editMode}
                        />        
                    </div>
                    }
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    console.log('hello');
    return {
        contacts: state.contacts,
        selected: state.selected,
        editing: state.editing
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
        removeContact: (contact) => {
            dispatch({
                type: "REMOVE_CONTACT",
                payload: contact
            });
        },
        selectContact: (id) => {
            dispatch({
                type: "SELECT_CONTACT",
                payload: id
            });
        },
        editMode: (editing) => {
            dispatch({
                type: "EDIT_MODE",
                payload: editing
            });
        } 
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);