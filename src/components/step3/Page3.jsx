import Buttons from "../Buttons";
import { useDispatch } from "react-redux";
import { prevStep } from "../../redux/formSlice";

export default function Page2() {
  const dispatch = useDispatch();

  return (
    <>
      <div className="form-title">
        <h1 className="bold">Select your plan</h1>
        <h3>You have the option of monthly or yearly billing.</h3>
      </div>

      <div className="form-content"></div>

      <div className="buttons">
        <Buttons
          back={() => {
            dispatch(prevStep());
          }}
          next={() => {
            handleNext();
          }}
        />
      </div>
    </>
  );
}
