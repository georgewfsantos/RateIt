import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.Text`
  color: #fff;
  font-size: 25px;
  margin-left: 15px;
`;

export const Form = styled.View`
  width: 90%;
  margin-top: 20px;
  padding: 30px;
`;

export const BusinessList = styled.FlatList.attrs({
  horizontal: true,
  showVerticalScrollIndicator: false,
  contentContainerStyle: {
    padding: 30,
    marginTop: 10,
    height: 312,
  },
})``;
