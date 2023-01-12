import React, { useState } from 'react';
import Button from './Button';

function Form() {
  const [selected, setSelected] = useState(1);

  const toggleTab = (index) => {
    setSelected(index);
  };

  return (
    <div>
      <form className='form'>
        <div className='form_control'>
          <label htmlFor='company_name'>Company Name</label>
          <input
            type='text'
            name='company_name'
            placeholder='e.g Example Inc'
          />
        </div>
        <div className='form_control'>
          <label htmlFor='industry'>Industry</label>
          <select name='industry' required>
            <option value=''>Select</option>
            <option value='1'>Web</option>
            <option value='2'>Mobile</option>
            <option value='3'>Cyber</option>
          </select>
        </div>
        <div className='form_control'>
          <label htmlFor='industry'>Company Size</label>
          <ul className='select_Field'>
            <li
              className={`${selected === 1 && 'active'}`}
              onClick={() => toggleTab(1)}
            >
              1-20
            </li>
            <li
              className={`${selected === 2 && 'active'}`}
              onClick={() => toggleTab(2)}
            >
              21-50
            </li>
            <li
              className={`${selected === 3 && 'active'}`}
              onClick={() => toggleTab(3)}
            >
              51-200
            </li>
            <li
              className={`${selected === 4 && 'active'}`}
              onClick={() => toggleTab(4)}
            >
              201-500
            </li>
            <li
              className={`${selected === 5 && 'active'}`}
              onClick={() => toggleTab(5)}
            >
              500+
            </li>
          </ul>
        </div>
        <Button />
      </form>
    </div>
  );
}

export default Form;
