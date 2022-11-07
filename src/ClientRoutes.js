import { SadCrudHeader } from './components/SadCrudHeader/SadCrudHeader.tsx';
import { LoginAndRegister } from './components/LoginAndRegister';
import { MainContent } from './components/MainContent';
import { NoMatch } from './NoMatch';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { getJwtToken } from './services/auth/tokenStorage';

const ProtectedRoute = ({ user, redirectPath = '/' }) => {
  const jwtToken = getJwtToken();
  if (!jwtToken) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
};

export const ClientRoutes = () => {
  const user = true;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginAndRegister />}></Route>
        <Route element={<ProtectedRoute user={user} />}>
          <Route path="main" element={<MainContent />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
