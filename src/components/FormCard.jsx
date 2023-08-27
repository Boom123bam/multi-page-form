import { useState } from "react";
import "./Form.css";
import Form from "./Form";
import StepIndicator from "./StepIndicator";

export default function FormCard() {
  const [step, setStep] = useState(1);
  return (
    <div className="form-wrapper">
      <div className="left-section">
        <StepIndicator step={step} />
      </div>

      <div className="right-section">
        <Form step={step} setStep={setStep} />
      </div>
    </div>
  );
}
