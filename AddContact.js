import React from 'react';


class AddContact extends React.Component {
    render() {
        return (
            <div className=''>
                <h2>add contact</h2>
                <form>
                    <div>
                        <label>name:</label>
                        <input type="text" placeholder="enter user name" />
                        <label>email:</label>
                        <input type="text" placeholder="enter the user email account" />
                        <button className='dropbtn'>ADD</button>
 
                    </div>
                </form>
            </div>
        );
    }
}
export default AddContact;