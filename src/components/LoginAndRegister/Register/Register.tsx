import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userSignUp } from '../../../services/auth/authAPI';
import { setJwtToken } from '../../../services/auth/tokenStorage';
import './styles.scss';

export function Register() {
  const [userName, setUserName] = useState('');
  const [passcode, setPasscode] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!(userName && passcode)) {
      return;
    }
    try {
      const response = await userSignUp({ username: userName, password: passcode });
      setJwtToken(response.data.token);
      navigate('/main');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="registerFormContainer">
      <header className="registerHeader">Sigin Up</header>
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
              const newpassword = event.target.value;
              setPasscode(newpassword);
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
