import React from "react";

export const ContactDetail = (props) => {
    return(
        <dl>
            <dt>Name</dt>
            <dd>{props.contact.firstName} {props.contact.lastName}</dd>
            <dt>Telephone</dt>
            <dd>
                Work:
                Home:
                Mobile:
            </dd>
            <dt>Email</dt>
            <dd></dd>
            <dt>Mobile</dt>
            <dd>{props.contact.email}</dd>
        </dl>
    );
};
