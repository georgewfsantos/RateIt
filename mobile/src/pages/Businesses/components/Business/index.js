import React from 'react';

import {
  BusinessItem,
  Banner,
  BusinessNameContainer,
  BusinessName,
} from './styles';

const Business = ({ business }) => {
  return (
    <BusinessItem>
      <Banner
        source={{
          uri: business?.avatar?.url,
        }}
      />
      <BusinessNameContainer>
        <BusinessName>{business?.name}</BusinessName>
      </BusinessNameContainer>
    </BusinessItem>
  );
};

export default Business;
