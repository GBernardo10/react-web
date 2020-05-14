import styled from 'styled-components';

export const FormStyle = styled.div`
  form {
    height: 500px;
    width: 500px;
    flex-direction: column;
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fefe;
  }
  input {
    margin: 10px 0;
  }

  button {
    border: none;
    height: 20px;
    width: 50%;
    margin-top: 10px;
    background: green;
  }
`;
