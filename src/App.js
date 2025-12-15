
import { useEffect, useState } from 'react';
import './App.css';
import ContactForm from './components/ContactForm/ContactForm';

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
    </div>
  );
}

export default App;
