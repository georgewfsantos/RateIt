import styled from 'styled-components';

export const Container = styled.div`
  background: #a9131e;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;

  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

export const ImageContainer = styled.div`
  width: 50%;
  height: 500px;
  background: #4a4442;
  border-radius: 4px;
  border: 2px solid #756f6d;
  color: #fff;

  img {
    width: 100%;
    height: 440px;
    border-radius: 4px 4px 0 0;
    border-bottom: 2px solid #756f6d;
  }

  h1 {
    text-align: center;
    align-self: center;
    padding: 8px;
  }
`;

export const CommentsContainer = styled.div`
  ul {
    height: 500px;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    padding: 0 10px;

    li {
      margin-top: 5px;
    }
  }

  ul::-webkit-scrollbar {
    display: none;
  }
`;
