import React, { Component } from 'react';
import ListContacts from './ListContacts'

class App extends Component {
  state = {
    contacts : [
      {
        "id": "karen",
        "name": "Karen Isgrigg",
        "handle": "karen_isgrigg",
        "avatarURL": "http://localhost:5001/karen.jpg"
      },
      {
        "id": "richard",
        "name": "Richard Kalehoff",
        "handle": "richardkalehoff",
        "avatarURL": "http://localhost:5001/richard.jpg"
      },
      {
        "id": "tyler",
        "name": "Tyler McGinnis",
        "handle": "tylermcginnis",
        "avatarURL": "http://localhost:5001/tyler.jpg"
      }
     ]
  }

  // everytime we remove a contact, it shoudl update contacts array 
  removeContact = (c) => {

    this.setState((currentState) => ({
      contacts : currentState.contacts.filter((contact) => {
        return contact.id !== c.id
      })
    }))
  }
  
  render() {
    return (
      <div>
        <ListContacts contacts = {this.state.contacts}
        onDeleteContact = {this.removeContact}
        ></ListContacts>
      </div>
    );
  }
}

export default App;
