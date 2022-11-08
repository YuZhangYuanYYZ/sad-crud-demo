import './styles.scss';

export function Switcher({ children, activeIndex }): JSX.Element {
  const contentItem = children.map((child, index) => {
    const visibility = activeIndex === index ? 'visible' : 'hidden';
    return (
      <div key={index} className={`${visibility}`}>
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

export function ActionsContainer({ children }): JSX.Element {
  return <div className="actionsContainer">{children}</div>;
}

export function LeftAction({ children }): JSX.Element {
  return <div className="leftItem action">{children}</div>;
}

export function RightAction({ children }): JSX.Element {
  return <div className="rightItem action">{children}</div>;
}
