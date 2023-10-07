import React from 'react';
import ContactCard from 'ContactCard';


const ContactList = (props) => {
    const deleteContactHandler = (id) => {
        props.getContactId(id);
    };
    
    /* this function gonna take props of contacts
     also rendering the props */
    const renderContactList = props.contacts.map((contact) => {
        
        return (
            <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id}  /> /*reference the rendering the contact list */
    );
});
    return <div>{ renderContactList}</div>
}
export default ContactList;