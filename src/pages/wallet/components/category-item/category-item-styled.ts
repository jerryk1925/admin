import styled from '@emotion/styled';
import { Flex } from '../../../../assets/styled';

export const CategoryWrapper = styled(Flex)`
  width: 80px;
  margin: 0 3px 15px;
  position: relative;
`;
const Category = styled('div')`
  position: relative;
  margin: 10px 0;
  width: 60px;
  height: 60px;
  overflow: hidden;
  border-radius: 50%;
  cursor: pointer;
`;

export const CategoryIcon = styled(Category)`
  background: #3190f0;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.13);
  &:hover{
    background: #0b9ee1;
  }
`;
export const CategoryAdd = styled(Category)`
  background-color: transparent;
  border: 2px solid #dedcdc;

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
