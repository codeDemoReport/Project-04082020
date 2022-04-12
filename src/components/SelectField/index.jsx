import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Field } from "formik";
import React from "react";
import "./style.scss";

function SelectField({ value, handleChange }) {
  return (
    <section className="field">
      <label className="field__label" htmlFor="category">
        Role
      </label>
      <FormControl>
        <InputLabel id="role">Select your role...</InputLabel>
        <Field name="role">
          {({ field }) => (
            <Select
              {...field}
              id="role"
              label="Select your role..."
              value={value}
              onChange={(e) => handleChange(e.target.value)}
            >
              <MenuItem value="0">User</MenuItem>
              <MenuItem value="1">Admin</MenuItem>
            </Select>
          )}
        </Field>
      </FormControl>
    </section>
  );
}

export default SelectField;
