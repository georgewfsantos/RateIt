import React, { useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { Text, Alert } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import ImagePicker from 'react-native-image-picker';

import { updateProfileRequest } from '../../store/modules/user/actions';
import { signOut } from '../../store/modules/auth/actions';

import SubmitButton from '../../components/Button';

import api from '../../services/api';

import {
  Container,
  Back,
  BackText,
  Form,
  FormInput,
  AvatarImage,
} from './styles';

const Profile = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.profile);

  const [picture, setPicture] = useState(null);

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [oldPassword, setOldPassword] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  function handleChoosePicture() {
    const options = {
      noData: true,
    };
    ImagePicker.showImagePicker(options, async (response) => {
      if (response) {
        setPicture(response);
      } else {
        Alert.alert(
          'Ocorreu um erro!',
          'Não foi possível selecionar essa photo'
        );
      }
    });
  }

  function handleSubmit() {
    // dispatch(updateProfileRequest(data));
  }

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container style={{ flex: 1, alignItems: 'center' }}>
      <Text>Profile</Text>

      <AvatarImage
        onPress={handleChoosePicture}
        source={{
          uri: picture?.uri
            ? picture.uri
            : user?.avatar?.url || 'https://i.stack.imgur.com/l60Hf.png',
        }}
      />

      <Back onPress={handleChoosePicture}>
        <BackText>Editar Foto</BackText>
      </Back>

      <Form>
        <FormInput
          name="name"
          placeholder="Nome"
          placeholderTextColor="#ddd"
          value={name}
          onChangeText={setName}
        />
        <FormInput
          name="email"
          placeholder="E-mail"
          placeholderTextColor="#ddd"
          value={email}
          onChangeText={setEmail}
        />
        <FormInput
          name="oldPassword"
          placeholder="Senha Antiga"
          placeholderTextColor="#ddd"
          value={oldPassword}
          onChangeText={setOldPassword}
        />
        <FormInput
          name="password"
          placeholder="Nova Senha"
          placeholderTextColor="#ddd"
          value={password}
          onChangeText={setPassword}
        />
        <FormInput
          name="confirmPassword"
          placeholder="Confirmar senha"
          placeholderTextColor="#ddd"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        <SubmitButton onPress={handleSubmit} style={{ width: 340 }}>
          Atualizar
        </SubmitButton>
      </Form>

      <Back onPress={() => navigation.navigate('Businesses')}>
        <BackText>Dashboard</BackText>
      </Back>

      <Back onPress={handleSignOut}>
        <BackText>Sair</BackText>
      </Back>
    </Container>
  );
};

export default Profile;
