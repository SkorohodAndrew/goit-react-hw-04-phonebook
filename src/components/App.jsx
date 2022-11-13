import { useState, useEffect } from 'react';
import { FormAddPhone } from './FormAddPhone/FormAddPhone';
import { ContactsList } from './ContactsList/ContactsList';
import { FilterContacts } from './FilterContacts/FilterContacts';
import { nanoid } from 'nanoid';

import { Container } from 'App.styled';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(localStorage.getItem('contacts')) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
    );
  });
  const [filter, setFilter] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  useEffect(() => {
    localStorage.setItem(`contacts`, JSON.stringify(contacts));
  }, [contacts]);

  const addContacts = contact => {
    contact.preventDefault();
    if (isDuplicate(contact)) {
      return alert(` Такий ${contact.name} і ${contact.number} вже є`);
    }
    setContacts(prev => {
      const newContact = {
        id: nanoid(),
        name,
        number,
      };
      return [...prev, newContact];
    });
  };

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        return setName(value);

      case 'number':
        return setNumber(value);

      default:
        return;
    }
  };

  const removeContacts = id => {
    setContacts(prev => {
      const NewContacts = prev.filter(contact => contact.id !== id);
      return NewContacts;
    });
  };

  const isDuplicate = ({ name, number }) => {
    // const { contacts } = this.state;
    const result = contacts.find(
      contact => contact.name === name && contact.number === number
    );

    return result;
  };

  const getFilterContacts = () => {
    if (!filter) {
      return contacts;
    }

    const normalisedFilter = filter.toLocaleLowerCase();

    const filterdContacts = contacts.filter(({ name, number }) => {
      const normalisedName = name.toLocaleLowerCase();
      const normalisedNumber = number.toLocaleLowerCase();
      const result =
        normalisedName.includes(normalisedFilter) ||
        normalisedNumber.includes(normalisedFilter);

      return result;
    });

    return filterdContacts;
  };

  const serchingFilter = e => {
    const value = e.currentTarget.value;
    setFilter(value);
  };

  const filteredContacts = getFilterContacts();

  return (
    <Container>
      <h1>PhoneBook</h1>
      <FormAddPhone
        onSubmit={addContacts}
        onChange={handleChange}
        numberValue={number}
        nameValue={name}
      />
      <h1>Contacts</h1>
      <FilterContacts
        item={filter}
        onChange={serchingFilter}
        numberValue={number}
        nameValue={name}
      />
      <ContactsList items={filteredContacts} removeContacts={removeContacts} />
    </Container>
  );
};
