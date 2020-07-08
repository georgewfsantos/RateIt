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
  justify-content: center;
  padding: 10px;
`;

export const ImageContainer = styled.div`
  width: 50%;
  height: 500px;
  background: #aaa;
  border-radius: 4px;

  img {
    width: 100%;
    height: 400px;
    border-radius: 4px 4px 0 0;
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
