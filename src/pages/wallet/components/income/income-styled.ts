import styled from '@emotion/styled';

interface Text {
  textRight?: boolean;
}

export const IncomeWrapper = styled('div')`
  box-shadow: 0 10px 40px 0 rgba(18, 106, 211, 0.07),
    0 2px 9px 0 rgba(18, 106, 211, 0.06);
  background: white;
  border-radius: 4px;
`;

export const IncomeHeader = styled('div')`
  padding: 15px;
  font-weight: 400;
  font-size: 20px;
  border-bottom: 1px solid #e8e7e7;
  background-color: rgba(244, 244, 241, 0.4);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const IncomeBody = styled('div')`
  padding: 15px;
`;

export const TextWrapper = styled('div')<Text>`
  text-align: ${props => (props.textRight ? 'center' : 'left')};
`;
export const Title = styled('span')`
  display: block;
  color: #797878;
`;

export const Description = styled('span')`
  display: block;
  margin-top: 5px;
  text-transform: lowercase;
  font-size: 12px;
  color: #9a9898;
`;
