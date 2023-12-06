import styled from 'styled-components';

// export const LoginFormItem = styled.form`
//   display: flex;
//   flex-direction: column;
//   align-items: baseline;
//   gap: 20px;
// `;
export const LoginFormContainer = styled.div`
  align-items: center;
  display: flex;

`;

export const LoginFormItem = styled.form`
  background-color: tomato;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 20px auto;
  width: 300px;
  height: 120px;
  padding: 60px;
  border-radius: 10px;
`;

export const LoginFormStyledFild = styled.input`
  padding: 4px;
  border-radius: 4px;
  text-align: center;
`;

export const LogInButton = styled.button`
  border-radius: 4px;
  width: 100px;
  padding: 6px;
  cursor: pointer;
  color: grey;
`;
