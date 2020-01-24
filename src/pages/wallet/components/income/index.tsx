import React from 'react';
import { CategoryItem } from '../category-item';
import {
  BlockBody,
  BlockHeader,
  BlockWrapper,
  BlockTitle,
  BlockStatsAmount,
  BlockStatsTitle,
  BlockItemText
} from '../../../../assets/styled/block-styled';
import { Flex } from '../../../../assets/styled';
import db from '../../../../db/income.json';

export const Income: React.FC = () => {
  console.log(db);
  return (
    <BlockWrapper>
      <BlockHeader>
        <Flex justify="space-between">
          <div>
            <BlockTitle>INCOME</BlockTitle>
            <BlockStatsTitle>date</BlockStatsTitle>
          </div>
          <BlockItemText>
            <BlockStatsAmount>{db.received}</BlockStatsAmount>
            <BlockStatsTitle>received</BlockStatsTitle>
          </BlockItemText>
          <BlockItemText>
            <BlockStatsAmount>{db.budget}</BlockStatsAmount>
            <BlockStatsTitle>budget</BlockStatsTitle>
          </BlockItemText>
        </Flex>
      </BlockHeader>
      <BlockBody>
        <Flex wrap={true}>
          {db.incomeArray.map(item => {
            return <CategoryItem />;
          })}
          <CategoryItem add />
        </Flex>
      </BlockBody>
    </BlockWrapper>
  );
};
