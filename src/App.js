
import { useEffect, useState } from 'react';
import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';

function App() {
  const [contacts, setContacts] = useState([])

  const addContact = (contact) => {
    setContacts(prev => [...prev, contact])
  }

  const deleteContact = (id) => {
    setContacts(prev => prev.filter(contact => contact.id !== id))
  }

  useEffect(() => {
    console.log("Список контактов обновлён")
  } )

  return (
    <div className="App">
      <h1>Контактный менеджер</h1>
      
      <ContactForm onAdd={addContact}/>
      <ContactList contact = {contact} onDelete = {deleteContact}/>
    </div>
  );
}

export default App;
