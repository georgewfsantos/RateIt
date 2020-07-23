import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Feather';
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
  BackButton,
  BackButtonText,
  Form,
  FormInput,
  AvatarImage,
  EditPhotoButton,
  EditPhotoButtonText,
  SavePhotoButton,
  SavePhotoButtonText,
  LogoutButton,
  LogoutButtonText,
} from './styles';

const Profile = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.profile);

  const [preview, setPreview] = useState(null);
  const [image, setImage] = useState(null);
  const [avatarId, setAvatarId] = useState(null);

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [oldPassword, setOldPassword] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  function handleChoosePicture() {
    const options = {};
    ImagePicker.showImagePicker(options, (upload) => {
      if (upload) {
        const filePreview = {
          uri: `data:image/jpeg;base64,${upload.data}`,
        };

        let prefix;
        let ext;

        if (upload.fileName) {
          [prefix, ext] = upload.fileName.split('.');
          ext = ext.toLocaleLowerCase() === 'heic' ? 'jpg' : ext;
        } else {
          prefix = new Date().getTime();
          ext = 'jpg';
        }

        const fileObj = {
          uri: upload.uri,
          type: upload.type,
          name: `${prefix}.${ext}`,
        };
        setImage(fileObj);
        setPreview(filePreview);
      } else {
        Alert.alert(
          'Ocorreu um erro!',
          'Não foi possível selecionar essa photo'
        );
      }
    });
  }

  async function handleSubmitFile() {
    const data = new FormData();

    data.append('file', image);

    const response = await api.post('/files', data);

    const { id } = response.data;

    setAvatarId(id);
  }

  function handleSubmit() {
    const profileData = {
      name,
      email,
      oldPassword,
      password,
      confirmPassword,
      avatar_id: avatarId,
    };
    dispatch(updateProfileRequest(profileData));
  }

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container style={{ flex: 1, alignItems: 'center' }}>
      <AvatarImage
        source={{
          uri: preview?.uri
            ? preview.uri
            : user?.avatar?.url || 'https://i.stack.imgur.com/l60Hf.png',
        }}
      />

      <EditPhotoButton onPress={handleChoosePicture}>
        <EditPhotoButtonText>
          <Icon name="camera" size={25} color="#fff" />
        </EditPhotoButtonText>
      </EditPhotoButton>

      <SavePhotoButton onPress={handleSubmitFile}>
        <SavePhotoButtonText>Salvar Foto</SavePhotoButtonText>
      </SavePhotoButton>

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

      <BackButton onPress={() => navigation.navigate('Businesses')}>
        <Icon name="arrow-left" size={25} color="#fff" />
        <BackButtonText>Dashboard</BackButtonText>
      </BackButton>

      <LogoutButton onPress={handleSignOut}>
        <Icon name="log-out" size={20} color="#fff" />
        <LogoutButtonText>Logout</LogoutButtonText>
      </LogoutButton>
    </Container>
  );
};

export default Profile;
