import React from 'react';
import Header from './Header';
import Form from './Form';

function Card() {
  return (
    <div>
      <div className='card'>
        <div className='card_container'>
          <div className='card_content'>
            <Header />
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
