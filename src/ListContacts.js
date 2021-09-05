import React, { Component } from 'react'

class ListContacts extends Component {
   
  render() {
    console.log('props', this.props)
    return (
      <ol className='contact-list'>
        {this.props.contacts.map((contact) => (
            <li key={contact.id} className='contact-list-item'>
              <div 
              className='contact-avatar'
              style={{ backgroundImage: `url(${contact.avatarURL})`
              }}></div>
              <div className='contact-details'>
                <p>{contact.name}</p>
                <p>{contact.handle}</p>
              </div>
              <div onClick= {() => this.props.onDeleteContact(contact)} className='contact-remove'>
              </div>
            </li>
        ))}
      </ol>
    )
  }
}

export default ListContacts