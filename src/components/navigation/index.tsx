import React from 'react';
import { Link } from 'react-router-dom';
import { NavigationItem, NavigationList } from './navigation-styled';

interface NavigationProps {
  closeSidebar?: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ closeSidebar }) => {
  return (
    <NavigationList>
      <NavigationItem onClick={closeSidebar}>
        <Link to="/main">Main</Link>
      </NavigationItem>
      <NavigationItem onClick={closeSidebar}>
        <Link to="/main/wallet">Wallet</Link>
      </NavigationItem>
      <NavigationItem onClick={closeSidebar}>
        <Link to="/main/recipes">Recipes</Link>
      </NavigationItem>
      <NavigationItem onClick={closeSidebar}>Chat</NavigationItem>
    </NavigationList>
  );
};
