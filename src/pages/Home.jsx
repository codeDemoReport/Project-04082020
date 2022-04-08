import { Avatar, Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import React from "react";
import { Form, Formik } from "formik";
import CustomField from "../components/CustomField";

function Home(props) {
  return (
    <section>
      <Box>
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
      </Box>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values) => {}}
      >
        <Form>
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
          <Button type="submit" variant="contained">
            Login
          </Button>
        </Form>
      </Formik>
    </section>
  );
}

export default Home;
