import React, { Component } from 'react';
import { FormAddPhone } from './FormAddPhone/FormAddPhone';
import { ContactsList } from './ContactsList/ContactsList';
import { FilterContacts } from './FilterContacts/FilterContacts';
import { nanoid } from 'nanoid';

import { Container } from 'App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem(`contacts`);
    const existingContacts = JSON.parse(contacts);

    if (existingContacts) {
      this.setState({ contacts: existingContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(`APP componentDidUpdate`);

    if (this.state.contacts !== prevState) {
      localStorage.setItem(`contacts`, JSON.stringify(this.state.contacts));
    }
  }
  addContacts = contact => {
    if (this.isDuplicate(contact)) {
      return alert(` Такий ${contact.name} і ${contact.number} вже є`);
    }
    this.setState(prev => {
      const newContact = {
        id: nanoid(),
        ...contact,
      };
      return {
        contacts: [...prev.contacts, newContact],
      };
    });
  };

  removeContacts = id => {
    this.setState(prev => {
      const NewContacts = prev.contacts.filter(contact => contact.id !== id);
      return {
        contacts: NewContacts,
      };
    });
  };

  isDuplicate = ({ name, number }) => {
    const { contacts } = this.state;
    const result = contacts.find(
      contact => contact.name === name && contact.number === number
    );

    return result;
  };

  getFilterContacts() {
    const { contacts, filter } = this.state;

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
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { addContacts, handleChange, removeContacts } = this;
    const { filter } = this.state;
    const contacts = this.getFilterContacts();

    return (
      <Container>
        <h1>PhoneBook</h1>
        <FormAddPhone onSubmit={addContacts} />
        <h1>Contacts</h1>
        <FilterContacts item={filter} onChange={handleChange} />
        <ContactsList items={contacts} removeContacts={removeContacts} />
      </Container>
    );
  }
}
