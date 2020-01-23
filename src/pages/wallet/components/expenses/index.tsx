import React from 'react';
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

export const Expenses: React.FC = () => {
  return (
    <BlockWrapper>
      <BlockHeader>
        <Flex justify="space-between">
          <div>
            <BlockTitle>INCOME</BlockTitle>
            <BlockStatsTitle>date</BlockStatsTitle>
          </div>
          <BlockItemText>
            <BlockStatsAmount> 23‎ €</BlockStatsAmount>
            <BlockStatsTitle>spent</BlockStatsTitle>
          </BlockItemText>
          <BlockItemText>
            <BlockStatsAmount> 23‎ €</BlockStatsAmount>
            <BlockStatsTitle>budget</BlockStatsTitle>
          </BlockItemText>
          <BlockItemText>
            <BlockStatsAmount> 23‎ €</BlockStatsAmount>
            <BlockStatsTitle>planned</BlockStatsTitle>
          </BlockItemText>
        </Flex>
      </BlockHeader>
      <BlockBody></BlockBody>
    </BlockWrapper>
  );
};
