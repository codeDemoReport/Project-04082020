import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Avatar, Button, Grid, Typography } from "@mui/material";

import { Box } from "@mui/system";
import { Form, Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import Copyright from "../../components/Copyright";
import CustomField from "../../components/CustomField";
import "./style.scss";
import { dataFieldRegister, dataArr } from "../../constant";
import { register } from "../../redux/action";

function Register(props) {
  const dispatch = useDispatch();
  const initialValues = {
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const validateSchema = Yup.object().shape({
    fullName: Yup.string().required("Required!"),
    email: Yup.string().required("Required!").email("Email Invalid!"),
    password: Yup.string().min(8, "Too Short!").required("Required!"),
    confirmPassword: Yup.string()
      .min(8, "Too Short!")
      .required("Required!")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });

  const handleSubmitForm = (values) => {
    dispatch(register(values));
  };
  return (
    <section className="register">
      <Box className="register__container">
        <Box>
          <Avatar sx={{ m: "1px auto", bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
        </Box>
        <Formik
          initialValues={initialValues}
          validationSchema={validateSchema}
          onSubmit={(values) => handleSubmitForm(values)}
        >
          <Form>
            {dataArr.map((element, index) => (
              <CustomField
                key={index}
                name={element.name}
                label={element.label}
                placeholder={element.placeholder}
                type={element.type}
              />
            ))}
            <Button
              type="submit"
              variant="contained"
              sx={{ margin: "4px 0", width: "100%" }}
            >
              Register
            </Button>
            <Grid container sx={{ marginTop: 2 }}>
              <Grid item sx={{ marginLeft: "150px" }}>
                <Link to="/login" variant="body2">
                  {"Already have an account? Sign in"}
                </Link>
              </Grid>
            </Grid>
            <Copyright sx={{ mt: 8, mb: 4 }} />
          </Form>
        </Formik>
      </Box>
    </section>
  );
}

export default Register;
