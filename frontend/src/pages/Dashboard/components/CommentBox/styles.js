import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
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

  .comment-content {
    height: 100px;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 8px;

    strong {
      color: #fff;
      font-size: 18px;
      margin-bottom: 5px;
    }
    span {
      color: #fff;
      margin-top: 5px;
      font-size: 14px;
    }
    p {
      color: #fff;
      word-wrap: break-word;
      width: 500px;
      max-height: 100px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-size: 16px;
    }
  }
`;
