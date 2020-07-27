import React, { useRef, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import logo from '../../assets/rate_it.png';

import { signUpRequest } from '../../store/modules/auth/actions';

import {
  Container,
  Logo,
  FormInput,
  Form,
  SubmitButton,
  ButtonText,
  SignLink,
  SignLinkText,
} from './styles';

export default function SignUp() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const emailRef = useRef();
  const passwordRef = useRef();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loading = useSelector((state) => state.auth.loading);

  function handleSubmit() {
    dispatch(signUpRequest(name, email, password));
  }
  return (
    <>
      <Container>
        <Logo source={logo} />
        <Form>
          <FormInput
            autoCorrect={false}
            placeholderTextColor="#ddd"
            autoCapitalize="none"
            placeholder="Nome completo"
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
            value={name}
            onChangeText={setName}
          />
          <FormInput
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-email"
            placeholderTextColor="#ddd"
            ref={emailRef}
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            value={email}
            onChangeText={setEmail}
          />
          <FormInput
            placeholderTextColor="#ddd"
            placeholder="Sua senha "
            secureTextEntry
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
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
        <SignLink
          onPress={() => {
            navigation.navigate('SignIn');
          }}
        >
          <SignLinkText>Já tenho conta</SignLinkText>
        </SignLink>
      </Container>
    </>
  );
}
