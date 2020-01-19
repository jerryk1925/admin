import React from 'react';
import { inject, observer } from 'mobx-react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Main, Auth } from '../pages';

const App: React.FC = inject('authStore')(
  observer(({ authStore }: any) => {
    console.log(authStore.values.username);
    return (
      <Router>
        <Switch>
          <Route path="/main">
            <Main />
          </Route>
          <Route exact path="/">
            <Auth />
          </Route>
        </Switch>
      </Router>
    );
  })
);
export default App;
