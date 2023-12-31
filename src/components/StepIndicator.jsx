import { useSelector } from "react-redux";
import StepNumber from "./StepNumber";

export default function StepIndicator() {
  const step = useSelector((state) => state.form.step);

  return (
    <div className="left-section-content">
      <StepNumber num={1} name={"Your Info"} active={step == 1} />
      <StepNumber num={2} name={"Select Plan"} active={step == 2} />
      <StepNumber num={3} name={"Add Ons"} active={step == 3} />
      <StepNumber
        num={4}
        name={"Summary"}
        active={step == 4 || step == 5}
      />
    </div>
  );
}
