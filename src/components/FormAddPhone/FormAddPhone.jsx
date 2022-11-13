// import { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import { Form, Label, Input, Button } from './FormAddPhone.styled';

const nameId = nanoid(5);
const numberId = nanoid(8);

export const FormAddPhone = ({
  onSubmit,
  onChange,
  numberValue,
  nameValue,
}) => {
  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');

  // const handleChange = event => {
  //   const { name, value } = event.target;
  //   switch (name) {
  //     case 'name':
  //       return setName(value);

  //     case 'number':
  //       return setNumber(value);

  //     default:
  //       return;
  //   }
  // };

  // const addContacts = contact => {
  //   // e.preventDefault();
  //   if (isDuplicate(contact)) {
  //     return alert(` Такий ${contact.name} і ${contact.number} вже є`);
  //   }
  //   setContacts(prev => {
  //     const newContact = {
  //       id: nanoid(),
  //       ...contact,
  //     };
  //     return {
  //       contacts: [...prev.contacts, newContact],
  //     };
  //   });
  // };

  return (
    <Form onSubmit={onSubmit}>
      <div>
        <Label htmlFor={nameId}>Name</Label>
        <Input
          id={nameId}
          name="name"
          type="text"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={nameValue}
          onChange={onChange}
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
          value={numberValue}
          onChange={onChange}
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
