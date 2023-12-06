import styled from 'styled-components';

export const RegisterFormContainer = styled.div`
  align-items: center;
  display: flex;
`;

export const RegisterFormItem = styled.form`
  background-color: tomato;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 20px auto;
  width: 300px;
  /* height: 170px; */
  padding: 60px;
  border-radius: 10px;
`;

export const RegisterFormStyledFild = styled.input`
  padding: 4px;
  border-radius: 4px;
  text-align: center;
`;

export const RegisterButton = styled.button`
  border-radius: 4px;
  width: 100px;
  padding: 6px;
  cursor: pointer;
  color: grey;
`;
