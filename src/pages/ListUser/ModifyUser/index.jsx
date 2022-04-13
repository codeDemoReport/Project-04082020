import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import Copyright from "../../../components/Copyright";
import CustomField from "../../../components/CustomField";
import SelectField from "../../../components/SelectField";
import { dataArr } from "../../../constant";
import { createUser, editUser, setUserEdit } from "../../../redux/action";
import history from "../../../utils/history";
import "./style.scss";

function AddOrEdit({ location }) {
  const dispatch = useDispatch();
  const { getUserEdit } = useSelector((state) => state.userReducer);

  console.log("Re-render Modify");

  const [role, setRole] = useState(
    getUserEdit?.isAdmin === 0 ? 0 : getUserEdit?.isAdmin === 1 ? 1 : ""
  );

  const check = location.pathname.indexOf("edit") === -1;

  useEffect(() => {
    return () => dispatch(setUserEdit({}));
  }, []);

  const initialValues = check
    ? { fullName: "", email: "", password: "", confirmPassword: "" }
    : {
        fullName: getUserEdit.fullName,
        email: getUserEdit.email,
      };

  const validateSchema = check
    ? Yup.object().shape({
        fullName: Yup.string().required("Required!").min(3, "Too Short!"),
        email: Yup.string().required("Required!").email("Invalid Email!"),
        password: Yup.string().required("Required!").min(8, "Too short!"),
        confirmPassword: Yup.string()
          .required("Required!")
          .oneOf([Yup.ref("password")], "Password must match!"),
      })
    : Yup.object().shape({
        fullName: Yup.string().required("Required!").min(3, "Too Short!"),
        email: Yup.string().required("Required!").email("Invalid Email!"),
      });

  const handleChangeRole = (value) => {
    setRole(value);
  };

  const handleSubmitForm = (values) => {
    if (check) {
      dispatch(
        createUser({
          fullName: values.fullName,
          email: values.email,
          password: values.password,
          isAdmin: role,
        })
      );
    } else {
      dispatch(
        editUser({
          ...values,
          id: getUserEdit._id,
          isAdmin: role,
        })
      );
    }
  };

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
            {check ? (
              <>
                {dataArr.map((item) => (
                  <CustomField
                    key={item.id}
                    name={item.name}
                    label={item.label}
                    placeholder={item.placeholder}
                    type={item.type}
                    disabled={item.disabled}
                  />
                ))}
              </>
            ) : (
              <>
                <CustomField
                  name="fullName"
                  label="Full Name"
                  placeholder="Enter your full name..."
                  type="text"
                />
                <CustomField
                  name="email"
                  label="Email"
                  placeholder="Enter your email..."
                  type="email"
                  disabled={true}
                />
              </>
            )}
            <SelectField value={role} handleChange={handleChangeRole} />
            <Box className="modify__btn">
              <Button type="submit" variant="contained" sx={{ marginRight: 2 }}>
                Submit
              </Button>
              <Button
                type="submit"
                variant="contained"
                onClick={() => history.push("/list-user")}
              >
                Back
              </Button>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
          </Form>
        </Formik>
      </Box>
    </section>
  );
}

export default AddOrEdit;
