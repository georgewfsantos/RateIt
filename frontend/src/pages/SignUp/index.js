import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '../../assets/rate_it.png';

import { signUpRequest } from '../../store/modules/auth/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('You must insert your full name'),
  email: Yup.string()
    .email('Invalid format')
    .required('You must insert an email address'),
  password: Yup.string()
    .min(6, 'Password must contain at least 6 characters')
    .required('You must insert your password'),
});

export default function SignUp() {
  const dispatch = useDispatch();
  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }
  return (
    <>
      <img src={logo} alt="Gobarber" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome" />
        <Input name="email" type="email" placeholder="E-mail" />
        <Input name="password" type="password" placeholder="Senha" />

        <button type="submit">Sign Up</button>
        <Link to="/"> Já possui conta ? Faça Login !</Link>
      </Form>
    </>
  );
}
