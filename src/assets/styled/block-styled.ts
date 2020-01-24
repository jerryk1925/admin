import styled from '@emotion/styled';

export const BlockWrapper = styled('div')`
  box-shadow: 0 10px 40px 0 rgba(18, 106, 211, 0.07),
    0 2px 9px 0 rgba(18, 106, 211, 0.06);
  background: white;
  border-radius: 4px;
  margin-bottom: 30px;
`;

export const BlockHeader = styled('div')`
  padding: 15px;
  font-weight: 400;
  font-size: 20px;
  border-bottom: 1px solid #e8e7e7;
  background-color: rgba(244, 244, 241, 0.4);
`;

export const BlockBody = styled('div')`
  padding: 15px;
`;

export const BlockTitle = styled('span')`
  font-size: 20px;
  text-transform: uppercase;
  color: rgb(121, 120, 120);
`;

export const BlockStatsAmount = styled('span')`
  color: #797878;
`;

export const BlockStatsTitle = styled('div')`
  text-transform: lowercase;
  font-size: 12px;
  color: #9a9898;
`;

export const BlockItemText = styled('div')`
  text-align: center;
`;
