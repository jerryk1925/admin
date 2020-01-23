import React, { useState } from 'react';
import { Popup } from '../../../../components/popup';
import { SpriteComponent } from '../../../../components/sprite-component';
import {
  CategoryAdd,
  CategoryWrapper,
  CategoryIcon,
  CategoryTitle,
  CategoryActualAmount
} from './category-item-styled';

import { BlockStatsTitle } from "../../../../assets/styled/block-styled";

interface CategoryItenProps {
  id?: number;
  name?: string;
  add?: boolean;
}

export const CategoryItem: React.FC<CategoryItenProps> = ({
  id,
  name,
  add
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const closePopup = (): void => {
    setOpen(false);
  };
  
  return (
    <CategoryWrapper>
      {add ? (
        <>
          <CategoryTitle></CategoryTitle>
          <CategoryAdd onClick={(): void => setOpen(true)}></CategoryAdd>
        </>
      ) : (
        <>
          <CategoryTitle>we</CategoryTitle>
          <CategoryIcon onClick={(): void => setOpen(true)}>
          </CategoryIcon>
          <CategoryActualAmount color='#0a93d1'>qwe</CategoryActualAmount>
          <BlockStatsTitle>qwe</BlockStatsTitle>
        </>
      )}
      {!open || <Popup open={open} onClose={closePopup} />}
    </CategoryWrapper>
  );
};
