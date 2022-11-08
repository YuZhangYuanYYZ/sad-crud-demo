import React from 'react';
import { Provider } from 'react-redux';
import './App.scss';
import { ClientRoutes } from './ClientRoutes';
import { SadCrudHeader } from './components/SadCrudHeader';
import store from './store';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <div className="App">
        <SadCrudHeader />
        <ClientRoutes />
      </div>
    </Provider>
  );
}

export default App;
