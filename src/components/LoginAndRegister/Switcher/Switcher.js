import './styles.scss';

export function Switcher({ children, activeIndex }) {
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

export function ActionsContainer({ children }) {
  return <div className="actionsContainer">{children}</div>;
}

export function LeftAction({ children }) {
  return <div className="leftItem action">{children}</div>;
}

export function RightAction({ children }) {
  return <div className="rightItem action">{children}</div>;
}
