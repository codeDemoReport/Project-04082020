import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Avatar, Button, Grid, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import Copyright from "../../components/Copyright";
import CustomField from "../../components/CustomField";
import "./style.scss";

function Register(props) {
  const initialValues = {
    fullname: "",
    email: "",
    password: "",
    cf_password: "",
  };
  const validateSchema = Yup.object().shape({
    fullname: Yup.string().required("Required!"),
    email: Yup.string().required("Required!").email("Email Invalid!"),
    password: Yup.string().min(8, "Too Short!").required("Required!"),
    cf_password: Yup.string()
      .min(8, "Too Short!")
      .required("Required!")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });

  const handleSubmitForm = (values) => {
    console.log(values);
  };
  return (
    <section className="home">
      <Box className="home__container">
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
            <CustomField
              name="fullname"
              label="Full name"
              placeholder="Enter your full name"
            />
            <CustomField
              name="email"
              label="Email"
              placeholder="Enter your email..."
            />
            <CustomField
              name="password"
              label="Password"
              type="password"
              placeholder="Enter your password..."
            />
            <CustomField
              name="cf_password"
              label="Confirm Password"
              type="password"
              placeholder="Confirm your password..."
            />
            <Button
              type="submit"
              variant="contained"
              sx={{ margin: "4px 0", width: "100%" }}
            >
              Register
            </Button>
            <Grid container sx={{ marginTop: 2 }}>
              {/* <Grid item xs sx={{ textAlign: "left" }}>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid> */}
              <Grid item>
                <Link href="#" variant="body2">
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
