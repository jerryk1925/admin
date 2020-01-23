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

export const Accounts: React.FC = () => {
  return (
    <BlockWrapper>
      <BlockHeader>
        <Flex justify="space-between">
          <div>
            <BlockTitle>ACCOUNTS</BlockTitle>
          </div>
          <BlockItemText>
            <BlockStatsAmount> 23‎ €</BlockStatsAmount>
            <BlockStatsTitle>balance</BlockStatsTitle>
          </BlockItemText>
        </Flex>
      </BlockHeader>
      <BlockBody></BlockBody>
    </BlockWrapper>
  );
};
