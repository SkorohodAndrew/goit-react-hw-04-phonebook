import React from 'react';
import PropTypes from 'prop-types';

import { Info, Span, Button } from './ContactsList.styled';

export function ContactsList({ items, removeContacts }) {
  const elements = items.map(({ name, number, id }) => {
    return (
      <Info key={id}>
        {name} : {number}
        <Span onClick={() => removeContacts(id)}>
          <Button>Delete</Button>
        </Span>
      </Info>
    );
  });
  return <ul>{elements}</ul>;
}

ContactsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  removeContacts: PropTypes.func.isRequired,
};
