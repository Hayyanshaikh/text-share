import React from 'react';
const Button = ({ text, onClick, disabled, className, icon }) => {
  return (
    <button className={`btn ${className?className:''}`} onClick={onClick} disabled={disabled}>
    	{icon}
      <span>{text}</span>
    </button>
  );
};

export default Button;
