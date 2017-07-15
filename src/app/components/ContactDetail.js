import React from "react";

export const ContactDetail = (props) => {
    return(
        <div>
            <dl>
                <dt>Name</dt>
                <dd>{props.contact.firstName} {props.contact.lastName}</dd>
            </dl>
            <dl>
                <dt>Telephone</dt>
                <dd>
                    Work:<br/>
                    Home:<br/>
                    Mobile:
                </dd>
            </dl>
            <dl>
                <dt>Email</dt>
                <dd>{props.contact.email}</dd>
            </dl>
            <div className="btn-toolbar">
                <button
                    className="btn btn-primary"
                    onClick={() => {
                        props.editMode(true);
                    }}
                >Edit</button>
                <button
                    className="btn btn-danger"
                    onClick={() => {
                        props.removeContact(props.contact);
                    }}
                >Delete</button>
            </div>
        </div>
    );
};
