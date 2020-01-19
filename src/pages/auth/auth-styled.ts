import styled from '@emotion/styled';

export const AuthWrapper = styled('div')`
  background-color: #f0f6ff;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const AuthForm = styled('form')`
  border-radius: 4px;
  min-width: 450px;
  padding: 30px;
  box-shadow: 0 10px 40px 0 rgba(18, 106, 211, 0.07),
    0 2px 9px 0 rgba(18, 106, 211, 0.06);
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const AuthLogo = styled('span')`
  margin-bottom: 20px;
`;
