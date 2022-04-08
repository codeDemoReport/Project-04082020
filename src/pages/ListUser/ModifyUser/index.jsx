import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import Copyright from "../../../components/Copyright";
import CustomField from "../../../components/CustomField";
import { dataArr } from "../../../constant";
import "./style.scss";
import axios from "axios";

function AddOrEdit({ location, match }) {
  const [user, setUser] = useState({});
  const check = location.pathname.indexOf("edit") === -1;

  useEffect(() => {
    axios
      .get(`http://192.168.68.51:3000/api/user/${match.params.id}`)
      .then((data) => setUser(data.data.user))
      .catch((err) => console.log(err));
  }, []);

  const initialValues = check
    ? { fullName: "", email: "", password: "", confirmPassword: "" }
    : {
        fullName: user.fullName,
        email: user.email,
        password: user.password,
        confirmPassword: user.password,
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
