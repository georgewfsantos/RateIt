import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, Image } from 'react-native';
import ImagePicker from 'react-native-image-picker';

import { Container, Back, BackText } from './styles';

import Button from '../../components/Button';

const Profile = () => {
  const navigation = useNavigation();

  const [picture, setPicture] = useState(null);
  /* const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); */

  function handleChoosePicture() {
    const options = {
      noData: true,
    };
    ImagePicker.showImagePicker(options, (response) => {
      if (response) {
        console.log('response', response);
        setPicture(response);
      } else {
        console.log('error');
      }
    });
  }

  return (
    <Container style={{ flex: 1, alignItems: 'center' }}>
      <Text>Profile</Text>
      {picture && (
        <Image
          source={{ uri: picture.uri }}
          style={{ width: 200, height: 200 }}
        />
      )}

      <Button onPress={handleChoosePicture}>Escolher foto</Button>

      <Back onPress={() => navigation.navigate('Businesses')}>
        <BackText>Dashboard</BackText>
      </Back>
    </Container>
  );
};

export default Profile;
