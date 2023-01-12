import React from 'react';
import line from '../assets/images/Solid_lines.png';

function Header() {
  return (
    <div className='header'>
      <img src={line} alt='line' />
      <h2>It’s a delight to have you onboard</h2>
      <p>Help us know you better.</p>
      <p>(This is how we optimize Wobot as per your business needs)</p>
    </div>
  );
}

export default Header;
