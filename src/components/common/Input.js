import React from 'react';

const Input = ({ type, label, placeholder, value, onChange,name }) => {
  return (
    <div className="input-wrapper">
      {label && <label htmlFor={label}>{label}</label>}
      <input
        type={type}
        id={label}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
