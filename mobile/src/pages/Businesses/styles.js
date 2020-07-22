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
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingHorizontal: 50,
    marginTop: 10,
    height: 312,
  },
})``;

export const ProfileLink = styled.TouchableOpacity`
  margin-bottom: 10px;
`;

export const ProfileLinkText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
