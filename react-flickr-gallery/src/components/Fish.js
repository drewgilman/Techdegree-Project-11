import React from 'react';
import Container from './Container';

const Fish = (props) => {
  return (
    <div className="photo-container">
      <h2>Images of {props.term}</h2>
      <Container term={props.term} />
    </div>
  );
};

export default Fish;
