import React from 'react';

function Button() {
  return (
    <div className='btn-container'>
      <button
        className='btn'
        type='submit'
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        Get Started
      </button>
    </div>
  );
}

export default Button;
