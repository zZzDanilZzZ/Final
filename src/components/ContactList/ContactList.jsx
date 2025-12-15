import ContactItem from "../ContactItem/ContactItem";


export default function ContactList(contact) {
    return (
        <div className="contact-list">
            <ContactItem contact={contact} />
        </div>

    )
}