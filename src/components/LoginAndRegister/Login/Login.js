import './styles.scss';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import { useDispatch } from 'react-redux';
export function Login() {
  const [userName, setUserName] = useState('');
  const [passcode, setPasscode] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className="loginFormContainer">
      <header className="loginHeader">LOGIN</header>
      <form className="loginForm" onSubmit={1}>
        <label className="userNameContainer">
          <p className="userNameItem">Username:</p>
          <input
            className="inputUsername"
            type="text"
            defaultValue={userName}
            placeholder="please input user name"
            onBlur={(event) => {
              const newNameValue = event.target.value;
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
              const newItemDescription = event.target.value;
            }}
          />
        </label>

        <div className="loginButtonsContainer">
          <div className="forgetPasswordBtn" onClick={() => 2}>
            ForgetPasscode
          </div>
          <input className="loginButton" type="submit" value="LOGIN" />
        </div>
      </form>
    </div>
  );
}
