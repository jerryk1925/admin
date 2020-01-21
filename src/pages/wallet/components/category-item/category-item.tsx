import React, { useState } from 'react';
import { Popup } from '../../../../components/popup';
import { CategoryAdd } from './category-item-styled';

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
    console.log('wqe')
    setOpen(false);
  }
  if (add) {
    return (
      <>
        <CategoryAdd onClick={(): void => setOpen(true)}></CategoryAdd>
        {!open || <Popup open={open} onClose={closePopup} />}
      </>
    );
  }
  return (
    <div>
      <div>cat</div>
      <div></div>
      <div></div>
    </div>
    
  )
};
