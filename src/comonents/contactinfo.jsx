import React from "react";

function ContactInfo(props) {
    return (
        <p className="info">
            <strong>{props.itemlable} : </strong> {props.itemname}
        </p>
    );
}
export default ContactInfo;