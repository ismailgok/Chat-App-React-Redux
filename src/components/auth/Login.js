import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Form, Segment, Button, Grid, Message } from "semantic-ui-react";
import styles from "./auth.module.css";

const Login = () => {
  const { register, handleSubmit, setValue, formState:{errors} } = useForm();



  const onSubmit = (data,e) => {
    e.preventDefault()
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
          <h1 className={styles.formHeader}>chat app</h1>
          <Form size="large" className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <Segment>
              <Form.Input
                fluid
                icon="mail"
                {...register("email")}
                iconPosition="left"
                name="email"
                onChange={(event,{name,value}) => {
                    setValue(name,value)
                }}
                placeholder="Email adresi"
                {...register("email",{required:true})}
              />
              <Form.Input
                fluid
                icon="lock"
                type="password"
                {...register("password", {required:true})}
                iconPosition="left"
                name="password"
                onChange={(event,{name,value}) => {
                    setValue(name,value)
                }}
                placeholder="Şifre"
              />
              {errors.email && <Message>Lütfen emaili doğru giriniz</Message>}
              <Button color="blue" fluid size="large">
                Giriş yap
              </Button>
            </Segment>
          </Form>
          <Message>
            Yeni misin? <Link to="/signup">Üye ol</Link>
          </Message>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default Login;
