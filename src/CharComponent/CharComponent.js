import "./CharComponent.css";
const charComponent = (props) => {
  return (
    <div className="CharComponent" onClick={props.clicked}>
      <p>{props.char}</p>
    </div>
  );
};

export default charComponent;
