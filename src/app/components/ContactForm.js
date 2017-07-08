import React from "react";

export class ContactForm extends React.Component {
    
    constructor(props) {
        super();
        this.state = {
            title: "",
            firstName: "",
            lastName: ""
        };
    };
    
    onChange(event) {
        var obj = {};
        obj[event.target.name] = event.target.value;
        this.setState(obj);
    }
    
    onSubmit() {
        var contact = {
            id: this.guid(),
            title: this.state.title,
            firstName: this.state.firstName,
            lastName: this.state.lastName
        };
        this.props.addContact(contact);
    }
    
    guid() {
        return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' +
           this.s4() + '-' + this.s4() + this.s4() + this.s4();
    }

    s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    
    render() {
        return (
            <form>
                <div className="form-group">
                    <label>Title:</label>
                    <input 
                        type="text"
                        name="title"
                        className="form-control"
                        value={this.state.title}
                        onChange={(event) => this.onChange(event)}
                    />
                </div>
                <div className="form-group">
                    <label>First Name</label>
                    <input 
                        type="text"
                        name="firstName"
                        className="form-control"
                        value={this.state.firstName}
                        onChange={(event) => this.onChange(event)}
                    />
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input 
                        type="text"
                        name="lastName"
                        className="form-control"
                        value={this.state.lastName}
                        onChange={(event) => this.onChange(event)}
                    />
                </div>
                <button 
                    type="button"
                    className="btn btn-primary"
                    onClick={this.onSubmit.bind(this)}
                >Submit</button>
            </form>
        );
    }
}
