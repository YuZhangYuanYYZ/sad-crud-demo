import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Login } from '../Login';
import { Register } from '../Register';
import './styles.scss';

export function Switcher({ children, activeIndex }) {
  console.log('activeIndex', activeIndex);
  const contentItem = children.map((child, index) => {
    const visibility = activeIndex === index ? 'visible' : 'hidden';
    return (
      <div key={index} className={`${visibility} panel`}>
        {child}
      </div>
    );
  });

  return (
    <div className="switcherContainer">
      <div className="overlay">{contentItem}</div>
    </div>
  );
}

function ActionsContainer({ children }) {
  return <div className="actionsContainer">{children}</div>;
}

function LeftAction({ children }) {
  return <div className="leftItem action">{children}</div>;
}

function RightAction({ children }) {
  return <div className="rightItem action">{children}</div>;
}

Switcher.ActionsContainer = ActionsContainer;
Switcher.LeftAction = LeftAction;
Switcher.RightAction = LeftAction;
