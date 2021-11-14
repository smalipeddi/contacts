import React, { Component } from 'react'
import PropTypes from 'prop-types'


class ListContacts extends Component {

  static propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact : PropTypes.func.isRequired
  }
  
  state = {
    query: ''
  }

  updateQuery = (query) => {
    this.setState(() => ({
      query: query.trim()
    }))
    
  }

  resetQuery = () => {
    this.updateQuery('')
  }

  render() {
    const { query } =  this.state
    const { contacts, onDeleteContact } = this.props
    console.log('props', this.props)

    const showingContacts = query === '' 
                           ? contacts 
                           : contacts.filter((c) => (c.name.toLowerCase().includes(query.toLowerCase())))
    
    
    return (
      <div className="list-contacts">
    
        <div className="list-contacts-top">
          <input  className="search-contacts" type="text" placeholder="Search Contacts"
          value={query}
          onChange={(event) => this.updateQuery(event.target.value)}/>
          <a href="/create" className="add-contact" >
             Add contact
          </a>
        </div>
        {showingContacts.length !== contacts.length && 
        <div className="showing-contacts">
          <span> Now showing {showingContacts.length} of {contacts.lenght}</span>
          <button onClick={this.resetQuery}>Show All</button> 
        </div>}
        <ol className='contact-list'>
        {showingContacts.map((contact) => (
            <li key={contact.id} className='contact-list-item'>
              <div 
              className='contact-avatar'
              style={{ backgroundImage: `url(${contact.avatarURL})`
              }}></div>
              <div className='contact-details'>
                <p>{contact.name}</p>
                <p>{contact.handle}</p>
              </div>
              <div onClick= {() => onDeleteContact(contact)} className='contact-remove'>
              </div>
            </li>
        ))}
      </ol>
      </div>
    )
  }
}
export default ListContacts