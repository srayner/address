import React from "react";

export class ContactForm extends React.Component {
    
    constructor(props) {
        super();
        this.state = {
            title: "",
            firstName: "",
            lastName: "",
            email: ""
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
            lastName: this.state.lastName,
            email: this.state.email
        };
        this.props.addContact(contact);
    }
    
    onDelete() {
        
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
            <form className="form-horizontal">
                <div className="form-group">
                    <label className="control-label col-sm-4">Title</label>
                    <div className="col-sm-8">
                        <input 
                            type="text"
                            name="title"
                            className="form-control"
                            value={this.state.title}
                            onChange={(event) => this.onChange(event)}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label className="control-label col-sm-4">First Name</label>
                    <div className="col-sm-8">
                        <input 
                            type="text"
                            name="firstName"
                            className="form-control"
                            value={this.state.firstName}
                            onChange={(event) => this.onChange(event)}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label className="control-label col-sm-4">Last Name</label>
                    <div className="col-sm-8">
                        <input 
                            type="text"
                            name="lastName"
                            className="form-control"
                            value={this.state.lastName}
                            onChange={(event) => this.onChange(event)}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label className="control-label col-sm-4">Email</label>
                    <div className="col-sm-8">
                        <input 
                            type="text"
                            name="email"
                            className="form-control"
                            value={this.state.email}
                            onChange={(event) => this.onChange(event)}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-offset-4 col-sm-8">
                        <div className="btn-toolbar">
                            <button 
                                type="button"
                                className="btn btn-primary"
                                onClick={this.onSubmit.bind(this)}
                            >Save</button>
                            <button 
                                type="button"
                                className="btn btn-default"
                                onClick={() => {
                                    this.props.editMode(false);
                                }}
                            >Cancel</button>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}
