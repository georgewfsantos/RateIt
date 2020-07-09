import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  background: #a9131e;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 20px;
`;

export const Wrapper = styled.div`
  width: 40%;
  background: #4a4442;
  padding: 20px;
  border-radius: 5px;
  height: 600px;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    max-height: 500px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 5px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    span {
      color: #f64c75;
      margin: 0 0 10px;
      font-weight: bold;
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 10px 0 20px;
    }

    button {
      align-self: center;
      width: 100%;
      margin: 5px 0 0;
      height: 44px;
      background: #0b0706;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${lighten(0.08, '#0b0706')};
      }
    }
  }

  > button {
    align-self: center;
    width: 100%;
    margin: 10px 0 0;
    height: 44px;
    background: #a9131e;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;

    &:hover {
      background: ${lighten(0.08, '#a9131e')};
    }
  }
`;

export const FormContainer = styled.div`
  align-items: center;
  justify-content: center;
`;
