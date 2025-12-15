import ContactItem from "../ContactItem/ContactItem";


export default function ContactList(contact, onDelete) {
    return (
        <div className="contact-list">
            <ContactItem contact={contact} />
        </div>

    )
}