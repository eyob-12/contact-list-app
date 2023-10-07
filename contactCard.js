import React from 'react';


const ContactCard = (props) => {
    const { id, name, email } = props.contact;
    return (
        <div>
            <div> {name}</div>
            <div>{email}</div>
            <div>
                <i>
                    {/* delete trash icon 
                                      */}
                    onClick = {() => props.clickHandler(id)}
                </i>
            </div>
        </div>
    );
}  

export default ContactCard;