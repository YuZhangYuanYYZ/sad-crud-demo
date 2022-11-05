import './App.scss';
import { Provider } from 'react-redux';
import store from './store';
import { SadCrudHeader } from './components/SadCrudHeader';
import { MainContent } from './components/MainContent';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <SadCrudHeader />
        <MainContent />
      </div>
    </Provider>
  );
}

export default App;
