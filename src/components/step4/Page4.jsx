import Buttons from "../Buttons";
import { useDispatch } from "react-redux";
import { prevStep, nextStep } from "../../redux/formSlice";
import Summary from "./Summary";

export default function Page4() {
  const dispatch = useDispatch();

  return (
    <>
      <div className="form-title">
        <h1 className="bold">Finishing up</h1>
        <h3>Double-check everything looks OK before confirming.</h3>
      </div>

      <div className="form-content">
        <Summary />
      </div>

      <div className="buttons">
        <Buttons
          back={() => {
            dispatch(prevStep());
          }}
          confirm={() => {
            dispatch(nextStep());
          }}
        />
      </div>
    </>
  );
}
