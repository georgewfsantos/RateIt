import React from 'react';

import { BusinessItem, Banner, BusinessName } from './styles';

const Business = () => {
  return (
    <BusinessItem>
      <Banner
        source={{
          uri:
            'http://localhost:3333/files/91e76cadcc14f92b00ea3007d4285857.jpg',
        }}
      />
      <BusinessName>Business Name</BusinessName>
    </BusinessItem>
  );
};

export default Business;
