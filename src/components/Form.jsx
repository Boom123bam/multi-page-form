import { useState } from "react";
import "./Form.css";
import Input from "./Input";

export default function Form() {
  const [step, setStep] = useState(1);
  return (
    <div className="form-wrapper">
      <div className="left-section">
        <div className="left-section-content">
          <div className="step">
            <div className={`step-circle${step == 1 ? " fill" : ""}`}>
              <span>1</span>
            </div>
            <div className="text desktop">
              <h4>Step 1</h4>
              <h2 className="bold">Your Info</h2>
            </div>
          </div>

          <div className="step">
            <div className={`step-circle${step == 2 ? " fill" : ""}`}>
              <span>2</span>
            </div>
            <div className="text desktop">
              <h4>Step 2</h4>
              <h2 className="bold">Select Plan</h2>
            </div>
          </div>

          <div className="step">
            <div className={`step-circle${step == 3 ? " fill" : ""}`}>
              <span>3</span>
            </div>
            <div className="text desktop">
              <h4>Step 3</h4>
              <h2 className="bold">Add Ons</h2>
            </div>
          </div>

          <div className="step">
            <div className={`step-circle${step == 4 ? " fill" : ""}`}>
              <span>4</span>
            </div>
            <div className="text desktop">
              <h4>Step 4</h4>
              <h2 className="bold">Summary</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="right-section">
        <div className="form-content">
          <Input step={step} setStep={setStep} />
        </div>
      </div>
    </div>
  );
}
