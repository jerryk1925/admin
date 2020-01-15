import styled from '@emotion/styled';

export const FormGroup = styled('div')``;

export const FormControl = styled('input')`
  width: 100%;
  border: 1px solid #dfe7f3;
  padding: 0.375rem 0.75rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  line-height: 1.5;
  border-radius: 0.25rem;

  &:focus {
    background-color: #fff;
    border-color: #736cc7;
    outline: 0;
    box-shadow: 0 5px 10px rgba(115, 108, 199, 0.4) !important;
  }
`;

export const FormLabel = styled('label')``;
