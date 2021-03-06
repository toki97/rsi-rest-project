import { Button, Container, TextField } from "@material-ui/core";
import { Field, Form, Formik } from "formik";
import React from "react";
import { useHistory } from "react-router-dom";
import FormSpacer from "../../components/FormSpacer";
import AuthService from "../../services/auth";
import routes from "../../setup/routes";
import useStyles from "./styles";
import { LoginPageFormData } from "./types";

const LoginPage: React.FC = (props) => {
  const classes = useStyles(props);
  const history = useHistory();

  const login = async (formData: LoginPageFormData) => {
    const { username, password } = formData;
    const token = await AuthService.login(username, password);

    if (token) {
      localStorage.setItem("token", token);
      history.push(routes.HOME);
    }
  };

  return (
    <Container className={classes.container}>
      <Formik<LoginPageFormData>
        initialValues={{
          username: "",
          password: "",
        }}
        onSubmit={login}
      >
        <Form className={classes.form}>
          <Field name="username" label="Login" as={TextField} />

          <FormSpacer />

          <Field
            name="password"
            label="Password"
            type="password"
            as={TextField}
          />

          <FormSpacer />

          <Button color="primary" type="submit">
            Login
          </Button>
        </Form>
      </Formik>
    </Container>
  );
};

export default LoginPage;
