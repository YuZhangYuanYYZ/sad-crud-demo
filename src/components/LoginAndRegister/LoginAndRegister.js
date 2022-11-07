import './styles.scss';
import { Switcher } from './Switcher';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Login } from './Login';
import { Register } from './Register';

export function LoginAndRegister() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="loginAndRegister">
      <Switcher activeIndex={activeIndex}>
        <Switcher.ActionsContainer>
          <Switcher.LeftAction>
            <Button className="join" onClick={() => setActiveIndex(1)}>
              Sign Up
            </Button>
          </Switcher.LeftAction>
          <Switcher.RightAction>
            <Login></Login>
          </Switcher.RightAction>
        </Switcher.ActionsContainer>
        <Switcher.ActionsContainer>
          <Switcher.LeftAction>
            <Button className="signup" onClick={() => setActiveIndex(0)}>
              Login
            </Button>
          </Switcher.LeftAction>
          <Switcher.RightAction>
            <Register></Register>
          </Switcher.RightAction>
        </Switcher.ActionsContainer>
      </Switcher>
    </div>
  );
}
