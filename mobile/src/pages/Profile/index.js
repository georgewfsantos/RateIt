import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text } from 'react-native';
import ImagePicker from 'react-native-image-picker';

import { Container, Back, BackText } from './styles';

import Button from '../../components/Button';

const Profile = () => {
  const navigation = useNavigation();

  const options = {};

  function handleChoosePicture() {
    ImagePicker.launchImageLibrary(options, (response) => {
      console.log('response', response);
    });
  }

  return (
    <Container>
      <Text>Profile</Text>

      <Button onPress={handleChoosePicture}>Escolher foto</Button>

      <Back onPress={() => navigation.navigate('Businesses')}>
        <BackText>Dashboard</BackText>
      </Back>
    </Container>
  );
};

export default Profile;
