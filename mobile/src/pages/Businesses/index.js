import React, { useState, useEffect } from 'react';

import Business from './components/Business';
import Input from '../../components/Input';
import SubmitButton from '../../components/Button';

import api from '../../services/api';

import { Container, Title, BusinessList, Form } from './styles';

/* const businessList = [
  {
    id: 1,
    name: 'Business Name',
    url: 'https://cdn.eso.org/images/screen/eso1322a.jpg',
  },
  {
    id: 2,
    name: 'Business Name',
    url: 'https://cdn.eso.org/images/screen/eso1322a.jpg',
  },
  {
    id: 3,
    name: 'Business Name',
    url: 'https://cdn.eso.org/images/screen/eso1322a.jpg',
  },
  {
    id: 4,
    name: 'Business Name',
    url: 'https://cdn.eso.org/images/screen/eso1322a.jpg',
  },
]; */

const Businesses = () => {
  const [searchValue, setSearchValue] = useState('');
  const [businessList, setBusinessList] = useState([]);

  async function handleSearch() {
    const response = await api.get(`/businesses?businessType=${searchValue}`);

    setBusinessList(response.data);
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
        renderItem={({ item: business }) => <Business business={business} />}
      />
    </Container>
  );
};

export default Businesses;
