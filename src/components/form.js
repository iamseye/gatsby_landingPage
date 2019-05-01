import React from 'react';
import { Form, Field } from 'react-final-form';
import Input from './input';

const renderInput = ({ input, meta }) => (
  <Input {...input} type="text" errorMessage={meta.touched && meta.error} />
);

const onSubmit = (values) => {
  alert(JSON.stringify(values));
};

const required = (value) => {
  if (!value || value === '') {
    return 'This field is required';
  }
  return undefined;
};

const emailCheck = (email) => {
  if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
    return 'Please enter the right email format';
  }
  return undefined;
};

const composeValidators = (...validators) => value => validators.reduce((error, validator) => error || validator(value), undefined);

const subscribeForm = () => (
  <Form
    onSubmit={onSubmit}
    render={({ handleSubmit }) => (
      <div>
        <form onSubmit={handleSubmit}>
          <Field
            name="email"
            component={renderInput}
            validate={composeValidators(required, emailCheck)}
          />
          <button className="btn-green" type="submit">Submit</button>
        </form>
      </div>
    )}
  />
);

export default subscribeForm;
