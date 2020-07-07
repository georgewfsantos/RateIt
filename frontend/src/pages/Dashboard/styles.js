import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-width: 900px;
  margin: auto;
  margin-top: 5%;
  align-items: center;
  justify-content: center;
`;

export const ImageContainer = styled.div`
  background: #fff;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 350px;
    height: 350px;
    background: #4a4442;
  }
`;

export const CommentsContainer = styled.div`
  display: flex;
  flex-direction: table-column;

  ul {
    margin-top: 10px;
  }
`;
