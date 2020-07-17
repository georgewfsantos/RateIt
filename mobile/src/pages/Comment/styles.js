import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
`;

export const CommentInput = styled.TextInput`
  margin-bottom: 15px;
  border: 1px solid #d5d5d5;
  padding: 13px;
  background: #fff;
  border-radius: 4px;
  height: 280px;
  font-size: 16px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.1);
`;

export const SubmitButton = styled.TouchableOpacity`
  height: 46px;
  background: #4a4442;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export const SubmitButtonText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`;
