import ValidationComponent from "../ValidationComponent/ValidationComponent";
import CharComponent from "../CharComponent/CharComponent";
const Assignment = (props) => {
  return (
    <div>
      <h1> Assignments</h1>
      <input
        type="text"
        id="outputInp"
        class="outputText"
        onChange={props.outputText}
      />
      <p id="outputText"></p>
      <ValidationComponent length={props.length} />
      {props.text.split("").map((char, index) => {
        return (
          <CharComponent
            char={char}
            key={index}
            clicked={props.removeChar.bind(props.this, index)}
          />
        );
      })}
    </div>
  );
};

export default Assignment;
