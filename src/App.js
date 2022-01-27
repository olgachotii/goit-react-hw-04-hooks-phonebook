import './App.css';
import React, { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/Contact';
import Filter from './components/Filter';

function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    const parseContacts = JSON.parse(contacts);
    parseContacts !== null && setContacts(parseContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = data => {
    if (contacts.find(contact => contact.name === data.name)) {
      alert(`${data.name} is already in contacts`);
    } else {
      setContacts(prevState => [data, ...prevState]);
    }
  };

  const handlChenge = e => {
    setFilter(e.currentTarget.value);
  };

  const findContact = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  const deliteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={formSubmitHandler} />

      <h2>Contacts</h2>
      <Filter filter={filter} onChange={handlChenge} />
      <ContactList data={findContact()} deliteContact={deliteContact} />
    </>
  );
}

export default App;
