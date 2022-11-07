import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './styles.scss';
export function Login() {
  const [userName, setUserName] = useState('');
  const [passcode, setPasscode] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const dispatch = useDispatch();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log(userName, passcode);
  };
  return (
    <div className="loginFormContainer">
      <header className="loginHeader">Login</header>
      <form className="loginForm" onSubmit={handleLoginSubmit}>
        <label className="userNameContainer">
          <p className="passcodeItem">Username:</p>
          <input
            className="inputUsername"
            type="text"
            defaultValue={userName}
            placeholder="Please input username"
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
          <input className="loginButton" type="submit" value="Login" />
        </div>
      </form>
    </div>
  );
}
