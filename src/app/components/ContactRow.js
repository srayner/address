import React from "react";

export const ContactRow = (props) => {
    return(
            <tr className={props.rowClass} onClick={() => {
                props.selectContact(props.contact.id);
            }}>
                <td>{props.contact.firstName}</td>
                <td>{props.contact.lastName}</td>
                <td>{props.contact.email}</td>
            </tr>
    );
};