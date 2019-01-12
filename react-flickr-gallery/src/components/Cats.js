import React from 'react';
import Container from './Container';

const Cats = (props) => {
  return (
    <div className="photo-container">
      <h2>Cats</h2>
      <Container term={props.term} />
    </div>
  );
};

export default Cats;
