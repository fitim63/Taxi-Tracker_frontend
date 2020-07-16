import React from "react";
import { Form } from "react-bootstrap";

const CustomInput = ({
  input,
  placeholder,
  type,
  meta: { touched, error, warning },
}) => (
  <div className="text-center">
    <Form.Control
      className="m-1 text-center"
      type={type}
      placeholder={placeholder}
      {...input}
    />
    {touched &&
      ((error && <span className="text-warning  ">{error}</span>) ||
        (warning && <span>{warning}</span>))}
  </div>
);

export default CustomInput;
