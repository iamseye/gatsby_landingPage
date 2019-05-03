import React from 'react';
import '../styles/form.scss';

const Input = ({ errorMessage, className, ...props  }) => (
  <div className={className}>
    <input {...props} />
    {errorMessage && <span className="errorMessage"> {errorMessage} </span>}
  </div>
);

export default Input;
