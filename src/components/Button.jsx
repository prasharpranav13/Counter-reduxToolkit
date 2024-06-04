import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterActions, privacyActions } from "../store";
const Button = () => {
  const dispatch = useDispatch();
  const handleInc = () => {
    dispatch(counterActions.INC());
  };
  const handleDec = () => {
    dispatch(counterActions.DEC());
  };
  const handleAdd = () => {
    dispatch(counterActions.ADD({ num: numElement.current.value }));
    numElement.current.value = "";
  };
  const handleSub = () => {
    dispatch(counterActions.SUB({ num: numElement.current.value }));
    numElement.current.value = "";
  };
  const handleReset = () => {
    dispatch(counterActions.RESET());
  };

  const handleToggle = () => {
    dispatch(privacyActions.TOGGLE());
  };

  const numElement = useRef();
  return (
    <div className="btnContainer">
      <div className="btn1">
        <button type="button" className="btn btn-success" onClick={handleInc}>
          +1
        </button>
        <button type="button" className="btn btn-danger" onClick={handleDec}>
          -1
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
      <div className="btn2">
        <input type="text" placeholder="Enter a number.." ref={numElement} />
        <button type="button" className="btn btn-primary" onClick={handleAdd}>
          Add
        </button>
        <button
          type="button"
          className="btn btn-warning text-white"
          onClick={handleSub}
        >
          Sub
        </button>
      </div>
      <div className="btn3">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={handleToggle}
        >
          Toggle
        </button>
      </div>
    </div>
  );
};
export default Button;
