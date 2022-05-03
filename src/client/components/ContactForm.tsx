import React, { Fragment, useImperativeHandle } from "react";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import {
    Button,
    Stack,
    FormControl,
    Box,
    TextField,
    FormHelperText,
    Alert
} from "@mui/material";

import { addContact } from "../store/contacts-slice";
import { RootState } from "../store";

type ContactFormProps = {
    editMode: boolean
  }
    
type ContactFormHandle = {
  setValues: (firstName: string, lastName: string, email: string, role: string) => void,
}

const ContactForm = React.forwardRef((props: ContactFormProps, ref: React.Ref<ContactFormHandle>) => {
  const dispatch = useDispatch();
  const status = useSelector((state: RootState) => state.contacts.status);
  const error = useSelector((state: RootState) => state.contacts.error);
  const name = useSelector((state: RootState) => state.contacts.name);
  const firstNameRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const lastNameRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const emailRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const messageRef = useRef() as React.MutableRefObject<HTMLTextAreaElement>;

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .required('First name is required')
      .max(25, 'First name must not exceed 25 characters'),
    lastName: Yup.string()
      .required('Last name is required')
      .max(25, 'Last name must not exceed 25 characters'),
    email: Yup.string()
      .required('Email is required')
      .email('Email is invalid'),
    message: Yup.string()
      .required('Message is required')
      .max(500, 'Message must not exceed 500 characters'),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  const setValues = (firstName: string, lastName: string, email: string, message: string) => {
    firstNameRef.current.value = firstName;
    lastNameRef.current.value = lastName;
    emailRef.current.value = email;
    messageRef.current.value = message;
  }

  useImperativeHandle(ref, () => {
    return {
      setValues: setValues
    }
  });

  useEffect(() => {
    if (['ADD'].includes(name) && status === 'completed' && error === '') {
    }
  }, [ status, error, name ]);

  const submitForm = () => {
    const firstName: string = firstNameRef.current.value;
    const lastName: string = lastNameRef.current.value;
    const email: string = emailRef.current.value;
    const message: string = messageRef.current.value;
    dispatch<any>(addContact(firstName, lastName, email, message));
  };

  return (
    <Fragment>
      { error !== '' ? <Alert severity="error">{error}</Alert> : status === "success" && <Alert severity="success">Success!</Alert> }
      <form onSubmit={handleSubmit(submitForm)}>
        <Stack spacing={2}>
            <FormControl>
              <TextField
                {...register('firstName')}
                name="firstName"
                placeholder="First Name"
                variant="standard"
                error={errors.firstName ? true : false}
                inputRef={firstNameRef}
              />
              <FormHelperText error={!!errors.firstName}>
                {errors.firstName ? errors.firstName.message : ''}
              </FormHelperText>
            </FormControl>
            <FormControl>
              <TextField
                {...register('lastName')}
                name="lastName"
                placeholder="Last Name"
                variant="standard"
                error={errors.lastName ? true : false}
                inputRef={lastNameRef}
              />
              <FormHelperText error={!!errors.lastName}>
                {errors.lastName ? errors.lastName.message : ''}
              </FormHelperText>
            </FormControl>
            <FormControl>
              <TextField
                {...register('email')}
                name="email"
                placeholder="Email"
                variant="standard"
                error={errors.email ? true : false}
                inputRef={emailRef}
              />
              <FormHelperText error={!!errors.email}>
                {errors.email ? errors.email.message : ''}
              </FormHelperText>
            </FormControl>
            <FormControl>
                <TextField
                    {...register('message')}
                    name="message"
                    placeholder="Type your message here"
                    variant="filled"
                    minRows={5}
                    multiline
                    error={errors.message ? true : false}
                    inputRef={messageRef}
                />
                <FormHelperText error={!!errors.message}>
                  {errors.message ? errors.message.message : ''}
                </FormHelperText>
            </FormControl>
            <Box textAlign="center">
                <Button type='submit'>Submit</Button>
            </Box>
          </Stack>
      </form>
    </Fragment>
  )
})

export default ContactForm;