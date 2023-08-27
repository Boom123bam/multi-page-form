import "./styles/Form.css";
import Form from "./Form";
import StepIndicator from "./StepIndicator";

export default function FormCard() {
  return (
    <div className="form-wrapper">
      <div className="left-section">
        <StepIndicator />
      </div>

      <div className="right-section">
        <Form />
      </div>
    </div>
  );
}
