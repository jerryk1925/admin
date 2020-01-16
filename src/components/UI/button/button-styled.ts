import styled from '@emotion/styled';

export const ButtonWrapper = styled('button')`
  background-color: #736cc7;
  border: 1px solid #736cc7;
  color: #fff;
  padding: 14px 26px;
  font-size: 1rem;
  width: 100%;
  border-radius: 0.25rem;
  box-shadow: 0 5px 10px rgba(115, 108, 199, 0.4);
  transition: all 0.2s ease;

  &:hover {
    background-color: #6861c3 !important;
    border: 1px solid #6861c3 !important;
    box-shadow: 0 15px 20px rgba(115, 108, 199, 0.4);
  }

  &:active {
    background-color: #7770c8 !important;
    border: 1px solid #7770c8 !important;
    box-shadow: 0 15px 20px rgba(115, 108, 199, 0.4);
  }
`;
