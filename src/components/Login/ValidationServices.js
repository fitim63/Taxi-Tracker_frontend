const validateLogin = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = "Username Required **";
  } else if (values.username.length < 5) {
    errors.username = "Minimum be 5 characters or more!";
  }
  if (!values.password) {
    errors.password = "Password Required **";
  }
  return errors;
};

const warn = (values) => {
  const warnings = {};
  if (values.age < 19) {
    warnings.age = "Hmm, you seem a bit young...";
  }
  return warnings;
};

const validateRegistration = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "First Name Required";
  } else if (values.firstName.length < 2) {
    errors.firstName = "Minimum be 3 characters or more";
  }
  if (!values.username) {
    errors.username = "Username required";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.password) {
    errors.password = "Password Required";
  }
  if (!values.lastName) {
    errors.lastName = "Last Name Required";
  } else if (values.lastName.length < 2) {
    errors.lastName = "Minimum be 3 characters or more";
  }
  return errors;
};

export { validateLogin, validateRegistration, warn };
