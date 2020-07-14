import React, { useState } from 'react';
import { ActivityIndicator } from 'react-native';
// import { useDispatch, useSelector } from 'react-redux';

import logo from '../../assets/rate_it.png';

// import { signInRequest } from '../../store/modules/auth/actions';

import {
  Container,
  Logo,
  FormInput,
  Form,
  SubmitButton,
  ButtonText,
} from './styles';

export default function SignUp() {
  // const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const loading = useSelector((state) => state.auth.loading);

  const loading = false;

  function handleSubmit() {
    // dispatch(signInRequest(email, password));
  }
  return (
    <>
      <Container>
        <Logo source={logo} />
        <Form>
          <FormInput
            name="name"
            placeholder="Informe seu nome completo"
            placeholderTextColor="#ddd"
            returnKeyType="next"
            value={name}
            onChangeText={setName}
          />
          <FormInput
            name="email"
            placeholder="Informe seu E-mail"
            placeholderTextColor="#ddd"
            returnKeyType="next"
            value={email}
            onChangeText={setEmail}
          />
          <FormInput
            name="password"
            placeholder="Informe sua senha"
            placeholderTextColor="#ddd"
            returnKeyType="send"
            onSubmitEdidting={handleSubmit}
            value={password}
            onChangeText={setPassword}
          />
          <SubmitButton onPress={handleSubmit}>
            {loading ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <ButtonText>Cadastrar</ButtonText>
            )}
          </SubmitButton>
        </Form>
      </Container>
    </>
  );
}
