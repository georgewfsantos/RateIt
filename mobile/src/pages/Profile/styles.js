import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const BackButton = styled.TouchableOpacity`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
`;

export const BackButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  margin-left: 8px;
`;

export const LogoutButton = styled.TouchableOpacity`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
`;

export const LogoutButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  margin-left: 8px;
`;

export const EditPhotoButton = styled.TouchableOpacity`
  margin-top: 20px;
`;

export const EditPhotoButtonText = styled.Text`
  color: #fff;
`;

export const SavePhotoButton = styled.TouchableOpacity`
  margin-top: 20px;
`;

export const SavePhotoButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
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
