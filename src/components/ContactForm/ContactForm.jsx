import React, { useState } from 'react'

export default function ContactForm ({onAdd}) {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        if(!name || !phone || !email) return

        onAdd({
            id: Date.now(),
            name,
            phone,
            email
        })

        setName('')
        setPhone('')
        setEmail('')
    }

    return (
        <form className='contact-form' onSubmit={handleSubmit} action="">
            <input
                className='contact-form__input'
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Name'
            />
            <input
                className='contact-form__input'
                type="text" 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder='Phone'
            />
            <input
                className='contact-form__input'
                type="text" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Email'
            />

            <button className='contact-form__btn'>
                Add Contact
            </button>

        </form>
    )
}
