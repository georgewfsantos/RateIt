import styled from 'styled-components';

export const Container = styled.div`
  background: #4a4442;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  width: 95%;

  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      width: 60px;
      margin-right: 20px;
      padding-right: 20px;
      /* border-right: 1px solid #eee; */
    }

    a {
      font-weight: bold;
      color: #fff;
    }
  }

  aside {
    display: flex;
    align-items: center;

    img {
      border: 2px solid #aaaaaa;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #eee;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #fff;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #aaa;
    }
  }

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
`;
