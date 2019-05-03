import React from 'react';
import '../styles/form.scss';

const Input = ({ errorMessage, ...props  }) => (
  <div className="input-field">
    <input {...props} />
    {errorMessage && <span className="errorMessage"> {errorMessage} </span>}
  </div>
);

export default Input;
