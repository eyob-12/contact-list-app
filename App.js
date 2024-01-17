// contact -list -app -with eyob-12
import React from 'react';
import AddContact from '.Component/AddContact';
import ContactCard from '.Component/ContactCard';
import ContactList from '.Component/ContactCard';
import '/App.css';

const App = () => {

    const LOCAL_STORAGE_KEY = "contacts";
    const [contacts, setContacts] = useState([]);

    const addContactHandler = (contact) => {
        setContacts([...contacts, { id: uuid(), ...contact }]);
    };

    const removeContactHandler = (id) => {
        const newContactList = contacts.filter((contact) => {
            return contact.id !== id;
        });
        setContacts(newContactList);
    };

    useEffect(() => {
        const retriveContacts= JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)); 
        if (retriveContacts) setContacts(retriveContacts)//manipulate the state
    }, []);
	
	useEffect(() => {
			localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringfy(contacts));
		}, [contacts]);
		
		/*  @@@@@@@@@@@@@@@@@@@@@@@@@@@  */	      
		/* to retrive data from local storage hold there when the user refresh it*/
		// i need one more useEffect to do that
		// let's flick it
		
    return (
        <div className='App'>
            <AddContact addContactHandler = {addContactHandler} />
            <ContactCard />
            <ContactList contacts={contacts} getContactId={removeContactHandler} />
        </div>
    );
}

export default App;
