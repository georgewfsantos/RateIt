import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const Back = styled.TouchableOpacity`
  margin-top: 20px;
`;

export const BackText = styled.Text`
  color: #fff;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 10px;
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

export const AvatarImage = styled.Image`
  width: 150px;
  height: 150px;
  border-radius: 75px;
`;
