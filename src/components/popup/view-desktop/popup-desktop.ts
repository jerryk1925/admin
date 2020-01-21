import styled from '@emotion/styled';

export const PopupWrapper = styled('div')`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1050;
  outline: 0;
  background: rgba(0, 0, 0, 0.5);
  overflow-x: hidden;
  overflow-y: auto;
  padding: 150px;
`;

export const Popup = styled('div')`
  margin: auto;
  background: white;
  box-shadow: 0 10px 40px 0 rgba(18, 106, 211, 0.07),
    0 2px 9px 0 rgba(18, 106, 211, 0.06);
  width: 400px;
  border-radius: 4px;
  padding: 15px;
`;
