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
export const BusinessList = styled.FlatList.attrs({
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { padding: 30 },
})``;
