import { Provider } from 'react-redux';
import './App.scss';
import { ClientRoutes } from './ClientRoutes';
import { SadCrudHeader } from './components/SadCrudHeader/SadCrudHeader.tsx';
import store from './store';

function App() {
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
