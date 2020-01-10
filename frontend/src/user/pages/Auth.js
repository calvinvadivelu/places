import React from 'react';

import Input from '../../shared/components/FormElements/Input'
import Button from '../../shared/components/FormElements/Button'
import Card from '../../shared/components/UIElements/Card';
import { VALIDATOR_MINLENGTH, VALIDATOR_EMAIL } from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import './Auth.css';
const Auth = () => {

    const [formState, inputHandler] = useForm({
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
    
    return (
        <Card className='authentication'>
            <h2>Login Required</h2>
            <hr/>
            <form onSubmit={loginSubmitHandler}>
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
                <Button type='submit' disabled={!formState.isValid}>LOGIN</Button>
            </form>
        </Card>
      );
};

export default Auth;