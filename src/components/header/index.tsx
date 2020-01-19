import React from 'react';
import { HeaderWrapper } from './header-styled';

interface Header {
  openSidebar?: () => void;
}

export const Header: React.FC<Header> = ({
                                   openSidebar
}) => {
  return (
    <HeaderWrapper>
      <div>
        <button onClick={openSidebar}>Открыть сайдбар</button>
      </div>
      <div></div>
    </HeaderWrapper>
  );
};
