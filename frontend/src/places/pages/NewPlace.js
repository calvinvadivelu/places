import React from "react";

import "./PlaceForm.css";
import Input from "../../shared/components/FormElements/Input";
import Button from '../../shared/components/FormElements/Button';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from "../../shared/util/validators";
import { useForm } from '../../shared/hooks/form-hook';


const NewPlace = () => {

  const [formState, inputHandler] = useForm({}, false)


  const placeSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs) //this is where I will send data to backend.
  }

  return (
    <form className="place-form" onSubmit={placeSubmitHandler}>
      <Input
        id='title'
        type="text"
        element="element"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please Enter a Valid Title"
        onInput={inputHandler}
        rows={1}
      />
      <Input
        id='description'
        type="text"
        element="element"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please Enter a Valid Description (AT LEAST 5 CHARACTERS)"
        onInput={inputHandler}
      />
      <Input
        id='address'
        type="text"
        element="element"
        label="Address"
        validators={[VALIDATOR_REQUIRE(5)]}
        errorText="Please Enter a Valid Address"
        onInput={inputHandler}
        rows={1}
      />
      <Button submit='submit' disabled={!formState.isValid}>
        ADD PLACE
      </Button>
    </form>
  );
};

export default NewPlace;
