import React from 'react';
import './App.css';
import { inject, observer } from 'mobx-react';

const App: React.FC = inject('authStore')(
  observer(({ authStore }: any) => {
    console.log(authStore.values.username);
    return <div>qwe</div>;
  })
);
export default App;
