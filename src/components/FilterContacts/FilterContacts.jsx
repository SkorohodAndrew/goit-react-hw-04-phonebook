import React from 'react';
import PropTypes from 'prop-types';

import { Form, Label, Input } from './FilterContacts.styled';

export function FilterContacts({ onChange, filter }) {
  return (
    <Form>
      <Label htmlFor="">Find Contacts by name</Label>
      <Input type="text" name="filter" value={filter} onChange={onChange} />
    </Form>
  );
}

FilterContacts.propTypes = {
  onChange: PropTypes.func.isRequired,
  filter: PropTypes.string,
};
