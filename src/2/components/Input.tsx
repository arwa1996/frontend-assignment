import { ChangeEvent, ChangeEventHandler, FunctionComponent } from "react";

/*
 * The InputProps interface defines the types for the components props.
 *
 * If you would like to proceed without defining types do the following:
 * const Input: FunctionComponent<any> = (props) => {
 *                                ^^^
 *
 * and remove the InputProps interface
 */


const inputStyle = {
  padding: '10px',
  borderRadius: '8px',
  border: '2px solid #756e6e'
}
interface InputProps {
  inputVal: string,
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void,
}

const Input: FunctionComponent<InputProps> = (props) => {
  const { inputVal, handleInputChange } = props;

  return (
    <div style={{display: 'flex',flexDirection:'column',alignItems: 'center', justifyContent: 'center'}}>
      <h4>Search by title</h4>

      <input style={inputStyle} type="search" placeholder="Search..." value={inputVal} onChange={handleInputChange} />
    </div>
  );
};

export default Input;
