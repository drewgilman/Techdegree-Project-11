import React from 'react';
import Container from './Container';

const Legos = (props) => {
  return (
    <div className="photo-container">
      <h2>{props.term} Images</h2>
      <Container term={props.term} />
    </div>
  );
};

export default Legos;
