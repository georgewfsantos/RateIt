import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 150px;
  align-items: center;
  justify-content: center;
  background-color: #4a4442;
  border-radius: 70px;
  border: 2px solid #756f6d;
  padding: 10px;

  & + & {
    margin-top: 5px;
  }

  img {
    width: 100px;
    height: 100px;
    border-radius: 50px;
    margin-right: 8px;
    border: 2px solid #756f6d;
  }

  p {
    margin-top: -60px;
    color: #fff;
    width: 500px;
  }
`;
