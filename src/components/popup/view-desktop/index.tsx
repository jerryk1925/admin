import React, { useRef } from 'react';
import { useClickOutside } from '../../../hooks/useClickOutside';
import { PopupWrapper, Popup } from './popup-desktop';

interface Popup {
  onClose: () => void;
}

export const PopupViewDesktop: React.FC<Popup> = ({ onClose }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  useClickOutside(ref, onClose);

  return (
    <PopupWrapper>
      <Popup ref={ref}>div</Popup>
    </PopupWrapper>
  );
};
