import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 10px;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 50px;
  align-items: center;
`;

export const FormInput = styled.TextInput`
  margin-bottom: 10px;
  color: #fff;
  width: 100%;
  max-width: 340px;
  background: rgba(0, 0, 0, 0.1);
  height: 50px;
  border-radius: 4px;
  font-size: 16px;
  padding-left: 20px;
`;
export const SubmitButton = styled(TouchableOpacity)`
  margin-top: 5px;
  align-items: center;
  justify-content: center;
  color: #fff;
  height: 50px;
  width: 100%;
  max-width: 340px;
  background: #4a4442;
  border-radius: 4px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

export const SignLink = styled.TouchableOpacity`
  margin-top: 20px;
`;

export const SignLinkText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
