import React from "react";
// TODO: import useFormik from formik library
import { useFormik } from "formik";

function App() {
  var errors = {};
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      emailField: "",
      pswField: "",
    },
    onSubmit: (values) => {
      console.log("form:", values);
      if (Object.keys(errors).length == 0) alert("Login Successful");
    },
    validate: (values) => {
      errors = {};
      if (!values.emailField) errors.emailError = "Field required";
      else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailField)
      ) {
        errors.emailError = "Not a valid email";
      }
      if (!values.pswField) errors.pswError = "Field required";
      return errors;
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Email</div>
        <input
          type="text"
          id="emailField"
          name="emailField"
          onChange={formik.handleChange}
          value={formik.values.emailField}
        ></input>
        {formik.errors.emailError ? (
          <div style={{ color: "red" }}>{formik.errors.emailError}</div>
        ) : null}
        <div>Password</div>
        <input
          type="password"
          id="pswField"
          name="pswField"
          onChange={formik.handleChange}
          value={formik.values.pswField}
        ></input>
        {formik.errors.pswError ? (
          <div style={{ color: "red" }}>{formik.errors.pswError}</div>
        ) : null}
        <button type="submit" id="submitBtn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
