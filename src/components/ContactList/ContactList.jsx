import React from 'react'
import ContactItem from '../ContactItem/ContactItem'

export default function ContactList({contacts, onDelete}) {
    if (contacts.lenght === 0) {
        return <p className='contact-list__empty'>Список контактов пуст</p>
    }


    return (
        <ul className='contact-list'> 
            {contacts.map(contact => (
                <ContactItem 
                    key={contact.id}
                    contact={contact}
                    onDelete={onDelete}
                />
            ))}
        </ul>
    )
}
