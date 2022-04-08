import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import Copyright from "../../../components/Copyright";
import CustomField from "../../../components/CustomField";
import { dataArr } from "../../../constant";
import "./style.scss";

function AddOrEdit({ location }) {
  const check = location.pathname.indexOf("edit") === -1;

  const initialValues = check
    ? { fullName: "", email: "", password: "", confirmPassword: "" }
    : {
        fullName: "Truong Thanh Tin",
        email: "truongthanhtin6@gmail.com",
        password: "12345678",
        confirmPassword: "12345678",
      };

  const validateSchema = Yup.object().shape({
    fullName: Yup.string().required("Required!").min(3, "Too Short!"),
    email: Yup.string().required("Required!").email("Invalid Email!"),
    password: Yup.string().required("Required!").min(8, "Too short!"),
    confirmPassword: Yup.string()
      .required("Required!")
      .oneOf([Yup.ref("password")], "Password must match!"),
  });

  const handleSubmitForm = (values) => {};

  return (
    <section className="modify">
      <Box className="modify__container">
        <h1 className="modify__title">
          {check ? "FORM ADD NEW USER" : "FORM EDIT USER"}
        </h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validateSchema}
          onSubmit={(values) => handleSubmitForm(values)}
        >
          <Form>
            {dataArr.map((item) => (
              <CustomField
                key={item.id}
                name={item.name}
                label={item.label}
                placeholder={item.placeholder}
                type={item.type}
              />
            ))}

            <Button
              type="submit"
              variant="contained"
              sx={{ marginTop: 2, width: "100%" }}
            >
              Submit
            </Button>
            <Copyright sx={{ mt: 8, mb: 4 }} />
          </Form>
        </Formik>
      </Box>
    </section>
  );
}

export default AddOrEdit;
