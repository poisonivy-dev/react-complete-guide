const validationComponent = (props) => {
  return (
    <div className="validationComponent">
      <p>
        {props.length <= 5 ? "Too short" : props.length >= 20 ? "Too long" : ""}
      </p>
    </div>
  );
};

export default validationComponent;
