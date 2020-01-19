import styled from '@emotion/styled';

interface Props {
  open: boolean;
}

export const SidebarWrapper = styled('aside')<Props>`
  background-color: #161931;
  position: fixed;
  width: 100%;
  padding: 10px;
  width: 260px;
  top: 65px;
  left: ${props => (props.open ? '0px' : '-260px')};
  height: 100vh;
  overflow-y: auto;
  box-shadow: 3px 0 20px -3px rgba(0, 0, 0, 0.14);
  z-index: 1;
  transition: all 0.3s ease;
`;
