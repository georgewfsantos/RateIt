import React, { useState, useEffect } from 'react';

import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import Business from './components/Business';
import Input from '../../components/Input';
import SubmitButton from '../../components/Button';

import api from '../../services/api';

import {
  Container,
  Title,
  BusinessList,
  Form,
  ProfileLink,
  ProfileLinkText,
} from './styles';

const Businesses = () => {
  const navigation = useNavigation();

  const [searchValue, setSearchValue] = useState('');
  const [businessList, setBusinessList] = useState([]);

  useEffect(() => {
    async function loadAllBusinesses() {
      const response = await api.get('/businesses');

      setBusinessList(response.data);
    }
    loadAllBusinesses();
  }, []);

  async function handleSearch() {
    const response = await api.get(`/businesses?businessType=${searchValue}`);

    setBusinessList(response.data);
    setSearchValue('');
  }
  return (
    <Container>
      <Title>Businesses</Title>

      <Form>
        <Input
          icon="search"
          placeholder="Buscar por categoria"
          value={searchValue}
          onChangeText={setSearchValue}
        />

        <SubmitButton onPress={handleSearch}>Pesquisar</SubmitButton>
      </Form>

      <BusinessList
        data={businessList}
        keyExtractor={(business) => String(business.id)}
        renderItem={({ item: business }) => (
          <Business business={business} navigation={navigation} />
        )}
      />

      <ProfileLink onPress={() => navigation.navigate('Profile')}>
        <Icon name="user" size={20} color="#fff" />
        <ProfileLinkText>Meu Perfil</ProfileLinkText>
      </ProfileLink>
    </Container>
  );
};

export default Businesses;
