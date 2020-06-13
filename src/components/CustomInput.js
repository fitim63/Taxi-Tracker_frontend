import React from "react";
import { Form } from "react-bootstrap";

const CustomInput = (field) => (
  <Form.Control
    className="m-1 text-center"
    type={field.type}
    placeholder={field.placeholder}
    {...field.input}
  />
);

export default CustomInput;
