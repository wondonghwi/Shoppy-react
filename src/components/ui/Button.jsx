import React from 'react';

function Button({ text, onClick, type = 'button' }) {
  return (
    <button
      type={type}
      className='bg-brand text-white py-2 px-4 rounded-sm hover:brightness-110'
      onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
