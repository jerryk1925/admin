import React from 'react';
import { isPortable } from '../../lib/userAgent';
import { PopupViewDesktop } from './view-desktop';
import { PopupViewPortable } from './view-portable';

interface PopupProps {
  open: boolean;
  onClose: () => void;
}

export const Popup: React.FC<PopupProps> = props => {
  console.log(props);
  if (isPortable()) {
    return <PopupViewPortable {...props} />;
  }
  return <PopupViewDesktop {...props} />;
};
