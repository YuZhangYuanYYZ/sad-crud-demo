import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userLogin } from '../../../services/auth/authAPI';
import { setJwtToken } from '../../../services/auth/tokenStorage';
import './styles.scss';

export function Login() {
  const [userName, setUserName] = useState('');
  const [passcode, setPasscode] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    console.log(userName, passcode);
    try {
      const response = await userLogin({ username: userName, password: passcode });
      setJwtToken(response.data.token);
      navigate('/main');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="loginFormContainer">
      <header className="loginHeader">Login</header>
      <form className="loginForm" onSubmit={handleLoginSubmit}>
        <label className="userNameContainer">
          <p className="userNameItem">Username:</p>
          <input
            className="inputUsername"
            type="text"
            defaultValue={userName}
            placeholder="Please input username"
            onBlur={(event) => {
              const newNameValue = event.target.value;
              setUserName(newNameValue);
            }}
          />
        </label>

        <label className="passcodeContainer">
          <p className="passcodeItem">Passcode:</p>
          <input
            className="inputPasscode"
            type="text"
            defaultValue={passcode}
            placeholder="please input passcode"
            onBlur={(event) => {
              const password = event.target.value;
              setPasscode(password);
            }}
          />
        </label>

        <div className="loginButtonsContainer">
          <input className="loginButton" type="submit" value="Login" />
        </div>
      </form>
    </div>
  );
}
