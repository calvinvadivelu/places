import React, { useState } from 'react';

import Input from '../../shared/components/FormElements/Input'
import Button from '../../shared/components/FormElements/Button'
import Card from '../../shared/components/UIElements/Card';
import { VALIDATOR_MINLENGTH, VALIDATOR_EMAIL, VALIDATOR_REQUIRE } from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import './Auth.css';
const Auth = () => {
    const [isLogin, setIsLogin] = useState(true)
    const [formState, inputHandler, setFormData] = useForm({
        email:{
          value: '',
          isValid: false
        },
        password:{
          value: '',
          isValid: false
        }
      }, false)

    const loginSubmitHandler = event => {
        event.preventDefault();
        console.log(formState.inputs);
    }
    const switchModeHandler = () => {
        if (!isLogin) {
             setFormData({
                 ...formState.inputs,
                 name: undefined
             } , formState.inputs.email.isValid && formState.inputs.password.isValid)
        }
        else{
            setFormData({
                ...formState.inputs,
                name: {
                    value: '',
                    isValid: false
                }
            }, false)
        }
        setIsLogin(prevMode => !prevMode)
    }
    return (
      <Card className="authentication">
        <h2>Login Required</h2>
        <hr />
        <form onSubmit={loginSubmitHandler}>
          {!isLogin && (
            <Input
              element="input"
              id="name"
              type="text"
              label="Username"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please enter a name."
              onInput={inputHandler}
            ></Input>
          )}
          <Input
            id="email"
            element="input"
            type="email"
            label="Email"
            validators={[VALIDATOR_EMAIL()]}
            errorText="Please enter an email to login"
            onInput={inputHandler}
          ></Input>
          <Input
            id="password"
            element="input"
            type="password"
            label="Password"
            validators={[VALIDATOR_MINLENGTH(8)]}
            errorText="Please enter your password"
            onInput={inputHandler}
          ></Input>
          <Button type="submit" disabled={!formState.isValid}>
          {isLogin ? "LOGIN" : "SIGN UP"}
          </Button>
        </form>
        <Button inverse onClick={switchModeHandler}>
          Switch to {isLogin ? "Login" : "Sign Up"} Mode
        </Button>
      </Card>
    );
};

export default Auth;