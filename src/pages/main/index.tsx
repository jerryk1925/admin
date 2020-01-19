import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Header } from '../../components/header';
import { Sidebar } from '../../components/sidebar';
import { Wallet } from '../wallet';
import { Recipes } from '../ recipes';

import { MainWrapper } from './main-styled';

export const Main: React.FC = () => {
  const [sidebar, setOpenSidebar] = useState<boolean>(false);

  const openSidebar = (): void => {
    setOpenSidebar(!sidebar);
  };

  return (
    <MainWrapper>
      <Header openSidebar={openSidebar}></Header>
      <Sidebar sidebar={sidebar} closeSidebar={openSidebar}></Sidebar>
      <main>
        <Switch>
          <Route exact path="/main/wallet">
            <Wallet />
          </Route>
          <Route exact path="/main/recipes">
            <Recipes />
          </Route>
        </Switch>
      </main>
    </MainWrapper>
  );
};
