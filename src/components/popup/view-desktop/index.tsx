import React, { useRef, useState } from 'react';
import { useClickOutside } from '../../../hooks/useClickOutside';
import { PopupWrapper, Popup, PopupHeader, PopupContent } from './popup-desktop';

interface Popup {
  onClose: () => void;
}

export const PopupViewDesktop: React.FC<Popup> = ({ onClose }) => {
  const [name, setName] = useState<string>('');
  const ref = useRef<HTMLDivElement | null>(null);
  useClickOutside(ref, onClose);
  const handleName = (event: React.FormEvent<HTMLInputElement>): void => {
    const value = (event.target as HTMLInputElement).value;
    setName(value);
  };
  return (
    <PopupWrapper>
      <Popup ref={ref}>
          <PopupHeader justify='space-between'>
            <div>asdasdasd</div>
            <div onClick={onClose}>x</div>
          </PopupHeader>
          <PopupContent>
            ASDASDASDSAD
          </PopupContent>
      </Popup>
    </PopupWrapper>
  );
};
