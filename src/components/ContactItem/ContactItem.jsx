

export default function ContactItem (contact) {


    return (
        <li className="contact-item">
            <p className="contact-item__name">{contact.name}</p>
            <p>{contact.phone}</p>
            <p>{contact.email}</p>

            <button className="contact-list__delete" onClick={onDelete}>
                X   
            </button>
        </li>
        
    )
}