import Buttons from "../Buttons";
import { useDispatch } from "react-redux";
import { prevStep } from "../../redux/formSlice";
import PlanItem from "./PlanItem";
import { useState } from "react";

export default function Page2() {
  const dispatch = useDispatch();
  const [displayMonthly, setDisplayMonthly] = useState(true);

  const handleCheckboxChange = () => {
    setDisplayMonthly(!displayMonthly);
  };

  return (
    <>
      <div className="form-title">
        <h1 className="bold">Select your plan</h1>
        <h3>You have the option of monthly or yearly billing.</h3>
      </div>

      <div className="form-content">
        <div className="plans">
          <PlanItem
            title="Arcade"
            monthlyPrice={9}
            displayMonthly={displayMonthly}
            yearlyPrice={90}
          />
          <PlanItem
            title="Arcade"
            monthlyPrice={9}
            displayMonthly={displayMonthly}
            yearlyPrice={90}
          />
          <PlanItem
            title="Arcade"
            monthlyPrice={9}
            yearlyPrice={90}
            displayMonthly={displayMonthly}
            selected={true}
          />
        </div>
        <div className="plan-toggle">
          <h2>Monthly</h2>
          <label class="switch">
            <input
              type="checkbox"
              checked={displayMonthly}
              onChange={handleCheckboxChange}
            />
            <span class="slider round"></span>
          </label>
          <h2>Yearly</h2>
        </div>
      </div>

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
