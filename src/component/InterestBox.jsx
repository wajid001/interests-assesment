import React from 'react';
import { BsCheckLg, BsPlus } from 'react-icons/bs';

const InterestBox = ({ selected, name, onClick }) => {
  return (
    <div
      className={`skill-item ${
        selected ? 'selected text-green' : 'un-selected'
      }`}
      onClick={onClick}
    >
      <span className='me-2'>{name}</span>
      {selected ? <BsCheckLg className='' /> : <BsPlus className='plus-icon' />}
    </div>
  );
};

export default InterestBox;
