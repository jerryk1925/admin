import React from 'react';
import { Navigation } from "../navigation";
import { SidebarWrapper } from './sidebar-styled';

interface SidebarProps {
  sidebar: boolean;
  closeSidebar?: () => void;
}
export const Sidebar: React.FC<SidebarProps> = ({ sidebar, closeSidebar }) => {
  return (
    <SidebarWrapper open={sidebar}>
      Sidebar
      <Navigation closeSidebar={closeSidebar} />
    </SidebarWrapper>
  )
};
