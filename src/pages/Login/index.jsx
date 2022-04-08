import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import {
  Avatar,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import Copyright from "../../components/Copyright";
import CustomField from "../../components/CustomField";
import { toastError, toastSuccess } from "./../../utils/toast";
import "./style.scss";

function Login(props) {
  const initialValues = {
    email: "",
    password: "",
  };
  const validateSchema = Yup.object().shape({
    email: Yup.string().required("Required!").email("Invalid Email!"),
    password: Yup.string().min(8, "Too Short!").required("Required!"),
  });

  const handleSubmitForm = (values) => {
    axios
      .post("http://192.168.68.51:3000/api/auth/login", values)
      .then((infoUser) => {
        localStorage.setItem("token", infoUser.data.accessToken);
        toastSuccess("Đăng nhập thành công!");
      })
      .catch((err) => {
        if (err.response.status === 400) {
          toastError(err.response.data.error);
        }
      });
  };

  return (
    <section className="login">
      <Box className="login__container">
        <Box>
          <Avatar sx={{ m: "1px auto", bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
        </Box>
        <Formik
          initialValues={initialValues}
          validationSchema={validateSchema}
          onSubmit={(values) => handleSubmitForm(values)}
        >
          <Form>
            <CustomField
              name="email"
              label="Email"
              placeholder="Enter your email..."
              type="text"
            />
            <CustomField
              name="password"
              label="Password"
              type="password"
              placeholder="Enter your password..."
            />
            <FormControlLabel
              sx={{ display: "flex", justifyItems: "start" }}
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              variant="contained"
              sx={{ margin: "4px 0", width: "100%" }}
            >
              Login
            </Button>
            <Grid container sx={{ marginTop: 2 }}>
              <Grid item xs sx={{ textAlign: "left" }}>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
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

export default Login;
