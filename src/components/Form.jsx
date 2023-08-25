import { useState } from "react";
import "./Form.css";

export default function Form() {
  const [step, setStep] = useState(1);
  return (
    <div className="form-wrapper">
      <div className="left-section">
        <div className="left-section-content">
          <div className="step">
            <div className="step-circle">
              <span>1</span>
            </div>
            <div className="step-text desktop">
              <h4>Step 1</h4>
              <h2 className="bold">Your Info</h2>
            </div>
          </div>

          <div className="step">
            <div className="step-circle fill">
              <span>2</span>
            </div>
            <div className="step-text desktop">
              <h4>Step 2</h4>
              <h2 className="bold">Select Plan</h2>
            </div>
          </div>

          <div className="step">
            <div className="step-circle">
              <span>3</span>
            </div>
            <div className="step-text desktop">
              <h4>Step 3</h4>
              <h2 className="bold">Add Ons</h2>
            </div>
          </div>

          <div className="step">
            <div className="step-circle">
              <span>4</span>
            </div>
            <div className="step-text desktop">
              <h4>Step 4</h4>
              <h2 className="bold">Summary</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="right-section">
        <div className="form-content"></div>
        <div className="buttons">
          <button className="back">Go Back</button>
          <button className="next">Next Step</button>
        </div>
      </div>
    </div>
  );
}
