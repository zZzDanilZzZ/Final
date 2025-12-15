import React from 'react'
import "./ContactItem.css"

export default function ContactItem({contact, onDelete}) {
  return (
    <li className='contact-item'>
        <div className='contact-item__info'>
            <p className='contact-item__name'>{contact.name}</p>
            <p>{contact.phone}</p>
            <p>{contact.email}</p>
        </div>

        <button className='contact-item__delete' onClick={() => onDelete(contact.id)}>
            Delete
        </button>
    </li>
  )
}

