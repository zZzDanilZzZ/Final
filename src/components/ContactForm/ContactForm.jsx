import { useState } from "react"


export default function ContactForm(onAdd) {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        if(!name || !phone || !email) return
            <p className="contact-form__empty">Форма пустая!</p>

        onAdd({
            id : Date.now(),
            name,
            phone,
            email
        })

        setName('')
        setPhone('')
        setEmail('')
    }

    return (
        <form onSubmit={handleSubmit} className="contact-form">
            <input
                className="contact-form__name"
                value={name}
                type="text" 
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
            />
            <input
                className="contact-form__phone"
                value={phone}
                type="text" 
                placeholder="phone"
                onChange={(e) => setPhone(e.target.value)}
            />
            <input
                className="contact-form__email"
                value={email}
                type="text" 
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
            />

            <button className="contact-form__btn" onClick={onAdd}>
                Add
            </button>
        </form>
    )
}