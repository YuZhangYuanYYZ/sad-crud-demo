import './styles.scss';
import { Login } from './Login';
import { Register } from './Register';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import { useDispatch } from 'react-redux';
export function LoginAndRegister() {
  const [userName, setUserName] = useState('');
  const [passcode, setPasscode] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className="loginAndRegister">
      <Login></Login>
      <Register></Register>
    </div>
  );
}
