import React, { useState } from 'react';
import { Popup } from '../../../../components/popup';
import { SpriteComponent } from '../../../../components/sprite-component';
import {
  CategoryAdd,
  CategoryWrapper,
  CategoryIcon
} from './category-item-styled';

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
    <CategoryWrapper justify="center">
      {add ? (
        <CategoryAdd onClick={(): void => setOpen(true)}></CategoryAdd>
      ) : (
        <>
          <CategoryIcon>
            <SpriteComponent />
          </CategoryIcon>
        </>
      )}
      {!open || <Popup open={open} onClose={closePopup} />}
    </CategoryWrapper>
  );
};
