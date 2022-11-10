import { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import { Form, Label, Input, Button } from './FormAddPhone.styled';

export const FormAddPhone = ({ addContacts }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  // state = {
  //   name: '',
  //   number: '',
  // };

  const nameId = nanoid();
  const numberId = nanoid();

  // handleChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value,
  //   });
  // };

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

  // handleSubmit = e => {
  //   e.preventDefault();
  //   const { name, number } = this.state;
  //   this.props.onSubmit({ name, number });
  //   this.setState({
  //     name: '',
  //     number: '',
  //   });
  // };

  // evt.preventDefault();
  // contacts.find(contact => contact.name === name);

  // dispatch(addContact({ name, number }));

  const handleSubmit = e => {
    e.preventDefault();
    addContacts();
    setName('');
    setNumber('');
  };

  // const { nameId, numberId, handleSubmit, handleChange } = this;
  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <Label htmlFor={nameId}>Name</Label>
        <Input
          id={nameId}
          name="name"
          type="text"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <Label htmlFor={numberId}>Number</Label>
        <Input
          id={numberId}
          name="number"
          type="tel"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Button>Add contact</Button>
      </div>
    </Form>
  );
};

FormAddPhone.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
