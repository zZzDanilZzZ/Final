import { useEffect, useState } from 'react';
import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';

function App() {
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    console.log("Список контактов обновлён", contacts)
  }, [contacts])

  const addContact = (contact) => {
    setContacts(prev => [...prev, contact])
  }

  const deleteContact = (id) => {
    setContacts(prev => prev.filter(contact => contact.id !== id))
  }

  return (
    <div className="App">
      <h1 className='App__title'>Контакт менеджер</h1>

      <ContactForm onAdd={addContact}/>
      <ContactList contacts={contacts} onDelete={deleteContact}/>

    </div>
  );
}

export default App;

