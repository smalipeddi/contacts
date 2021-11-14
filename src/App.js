import React, { Component } from 'react';
import ListContacts from './ListContacts';
import CreateContacts from './CreateContacts';
import { Route } from 'react-router-dom';
import * as ContactsAPI from './utils/ContactsAPI';

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

  createContact = (contact) => {
    ContactsAPI.create(contact).then((contact) => {
      
      this.setState((currentState) => ({
        contacts: currentState.contacts.concat([contact])
      }))
    })
  }

  render() {
    return (
      <div>
      <Route exact path="/" render={() => (<ListContacts contacts = {this.state.contacts}
                                                   onDeleteContact = {this.removeContact}
                                               
        />)} />       
       <Route path="/create" render={() => (
        <CreateContacts onCreateContact={(contact) => {this.createContact(contact)
        }}
        />
        )} />
      </div>
    );
  }
}

export default App;
