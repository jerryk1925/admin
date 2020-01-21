import styled from '@emotion/styled';

export const CategoryAdd = styled('div')`
  position: relative;
  margin: 10px 0;
  width: 60px;
  height: 60px;
  overflow: hidden;
  border-radius: 50%;
  background-color: transparent;
  border: 2px solid #dedcdc;
  cursor: pointer;

  &:hover {
    border-color: #b6b3b3;
    background-color: #d6d6d6;
    &:before,
    &:after {
      background-color: #b6b3b3;
    }
  }

  &:before,
  &:after {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #dedcdc;
    content: '';
  }
  &:before {
    width: 20px;
    height: 2px;
  }

  &:after {
    width: 2px;
    height: 20px;
  }
`;

export const CategoryWrapper = styled('div')`
  position: relative;
  margin: 10px 0;
  width: 60px;
  height: 60px;
  overflow: hidden;
  border-radius: 50%;
  background-color: transparent;
  border: 2px solid #dedcdc;
  cursor: pointer;
`
