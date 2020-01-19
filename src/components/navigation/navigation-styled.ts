import styled from '@emotion/styled';

export const NavigationList = styled('ul')`
  list-style: none;
  padding: 0;
`;

export const NavigationItem = styled('li')`
  padding: 5px 0;
  a {
    text-decoration: none;
    color: #7598c1;
    transition: 0.3s ease;
    cursor: pointer;
    &:hover {
      color: white;
    }
  }
`;
