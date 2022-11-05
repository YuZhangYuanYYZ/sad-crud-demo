import './App.scss';
import { Provider } from 'react-redux';
import store from './store';
import { SadCrudHeader } from './components/SadCrudHeader/SadCrudHeader.tsx';
import { Login } from './components/Login';
import { MainContent } from './components/MainContent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Login />,
//   },
//   {
//     path: '/main',
//     element: <MainContent />,
//   },
// ]);
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <SadCrudHeader />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/main" element={<MainContent />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
