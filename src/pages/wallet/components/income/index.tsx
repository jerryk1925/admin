import React from 'react';
import { CategoryItem } from '../category-item/category-item';

import {
  IncomeWrapper,
  IncomeBody,
  IncomeHeader,
  Title,
  Description,
  TextWrapper
} from './income-styled';

export const Income: React.FC = () => {
  return (
    <IncomeWrapper>
      <IncomeHeader>
        <TextWrapper>
          <Title>Доходы</Title>
          <Description>za mesac</Description>
        </TextWrapper>
        <TextWrapper textRight>
          <Title>0 грв</Title>
          <Description>получено</Description>
        </TextWrapper>
        <TextWrapper textRight>
          <Title>0 грв</Title>
          <Description>бюджет доходов</Description>
        </TextWrapper>
      </IncomeHeader>
      <IncomeBody>
        <CategoryItem add />
        <CategoryItem />
      </IncomeBody>
    </IncomeWrapper>
  );
};
