import './styles.scss';
import { Switcher, ActionsContainer, LeftAction, RightAction } from './Switcher';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Login } from './Login';
import { Register } from './Register';

export function LoginAndRegister() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="loginAndRegister">
      <Switcher activeIndex={activeIndex}>
        <ActionsContainer>
          <LeftAction>
            <Button className="join" onClick={() => setActiveIndex(1)}>
              Sign Up
            </Button>
          </LeftAction>
          <RightAction>
            <Login></Login>
          </RightAction>
        </ActionsContainer>
        <ActionsContainer>
          <LeftAction>
            <Button className="signup" onClick={() => setActiveIndex(0)}>
              Login
            </Button>
          </LeftAction>
          <RightAction>
            <Register></Register>
          </RightAction>
        </ActionsContainer>
      </Switcher>
    </div>
  );
}
