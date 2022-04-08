import { TextField } from "@mui/material";
import { ErrorMessage, Field } from "formik";
import React from "react";
import "./style.scss";

function CustomField({ name, label, placeholder, type }) {
  return (
    <section className="field">
      <label className="field__label" htmlFor={name}>
        {label}
      </label>
      <Field name={name}>
        {({ field }) => (
          <TextField
            id={name}
            {...field}
            label={placeholder}
            variant="outlined"
            type={type}
          />
        )}
      </Field>
      <div className="field__error">
        <ErrorMessage name={name} />
      </div>
    </section>
  );
}

export default CustomField;
