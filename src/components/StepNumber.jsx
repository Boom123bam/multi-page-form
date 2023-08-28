import { useDispatch, useSelector } from "react-redux";
import { setStep } from "../redux/formSlice";

export default function StepNumber({ num, name, active }) {
  const currentStep = useSelector((state) => state.form.step);
  const dispatch = useDispatch();
  return (
    <div className="step">
      <div
        className={`step-circle${active ? " fill" : ""}`}
        onClick={() => {
          if (num < currentStep) dispatch(setStep(num));
        }}
      >
        <span>{num}</span>
      </div>
      <div className="text desktop">
        <h4>Step {num}</h4>
        <h2 className="bold">{name}</h2>
      </div>
    </div>
  );
}
