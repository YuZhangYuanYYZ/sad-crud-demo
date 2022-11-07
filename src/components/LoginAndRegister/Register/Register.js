import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './styles.scss';
export function Register() {
  const [userName, setUserName] = useState('');
  const [passcode, setPasscode] = useState('');
  const [confirmPasscode, setConfirmPasscode] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const dispatch = useDispatch();

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(userName, passcode);
  };

  return (
    <div className="registerFormContainer">
      <header className="registerHeader">Sign Up</header>
      <form className="registerForm" onSubmit={handleRegister}>
        <label className="userNameContainer">
          <p className="userNameItem">Username:</p>
          <input
            className="inputUsername"
            type="text"
            defaultValue={userName}
            placeholder="please input a user name"
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
        <label className="confirmPContainer">
          <p className="confirmPasscodeItem">ConfirmPasscode:</p>
          <input
            className="confirmPasscode"
            type="text"
            defaultValue={confirmPasscode}
            placeholder="please confirm passcode"
            onBlur={(event) => {
              const newItemDescription = event.target.value;
            }}
          />
        </label>

        <div className="registerButtonsContainer">
          <input className="registerButton" type="submit" value="Sign Up" />
        </div>
      </form>
    </div>
  );
}
