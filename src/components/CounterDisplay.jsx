import { useSelector } from "react-redux";

const CounterDisplay = () => {
  //store.<slice_name>
  const counterObj = useSelector((store) => store.counter);
  const counterVal = counterObj.counterVal;
  return <h5 className="cnt">Current value is : {counterVal} </h5>;
};
export default CounterDisplay;
