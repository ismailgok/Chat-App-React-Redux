import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Form, Segment, Button, Grid, Message } from "semantic-ui-react";
import styles from "./auth.module.css";

const Signup = () => {
  const {
    formState: { errors },
    handleSubmit,
    setValue,
    register,
  } = useForm();

  const onSubmit = (e, data) => {
    console.log(data);
  };

  return (
    <div>
      <Grid
        textAlign="center"
        verticalAlign="middle"
        className={styles.container}
      >
        <Grid.Column width={4}>
          <h1 className={styles.formTitle}>chat app</h1>
          <Form
            size="large"
            className={styles.form}
            onSubmit={handleSubmit(onSubmit)}
          >
            <Segment>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                name="username"
                {...register("username", { required: true })}
                placeholder="Kullanıcı adı"
                onChange={(event, { name, value }) => {
                  setValue(name, value);
                }}
              />
              <Form.Input
                fluid
                icon="mail"
                iconPosition="left"
                name="email"
                placeholder="Email adresi"
                {...register("email", { required: true })}
                onChange={(event, { name, value }) => {
                  setValue(name, value);
                }}
              />
              <Form.Input
                fluid
                type="password"
                icon="lock"
                iconPosition="left"
                name="password"
                placeholder="Şifre"
                {...register("password", { required: true })}
                onChange={(event, { name, value }) => {
                  setValue(name, value);
                }}
              />
              {errors.email && errors.username && errors.password && (
                <Message color="red">Hatalı giriş</Message>
              )}
              <Button color="black" fluid size="large">
                Üye ol
              </Button>
            </Segment>
          </Form>
          <Message>
            Bir hesabın var mı? <Link to="/login">Giriş yap</Link>
          </Message>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default Signup;
