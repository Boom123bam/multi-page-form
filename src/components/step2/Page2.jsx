import Buttons from "../Buttons";
import { useDispatch } from "react-redux";
import { prevStep, nextStep, editData } from "../../redux/formSlice";
import PlanItem from "./PlanItem";
import { useState } from "react";

export default function Page2() {
  const dispatch = useDispatch();
  const [displayMonthly, setDisplayMonthly] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState(false);

  const handleCheckboxChange = () => {
    setDisplayMonthly(!displayMonthly);
  };

  function validate() {
    return selectedPlan;
  }

  function handleNext() {
    if (validate()) {
      dispatch(nextStep());
      dispatch(
        editData({ plan: selectedPlan, monthly: displayMonthly })
      );
    }
  }

  return (
    <>
      <div className="form-content-wrapper">
        <div className="form-title">
          <h1 className="bold">Select your plan</h1>
          <h3>You have the option of monthly or yearly billing.</h3>
        </div>

        <div className="form-content">
          <div className="plans">
            <PlanItem
              title="Arcade"
              img="assets/images/icon-arcade.svg"
              monthlyPrice={9}
              displayMonthly={displayMonthly}
              yearlyPrice={90}
              selected={selectedPlan == "arcade"}
              onClick={() => {
                setSelectedPlan("arcade");
              }}
            />
            <PlanItem
              title="Advanced"
              img="assets/images/icon-advanced.svg"
              monthlyPrice={12}
              displayMonthly={displayMonthly}
              yearlyPrice={120}
              selected={selectedPlan == "advanced"}
              onClick={() => {
                setSelectedPlan("advanced");
              }}
            />
            <PlanItem
              title="Pro"
              img="assets/images/icon-pro.svg"
              monthlyPrice={15}
              yearlyPrice={150}
              displayMonthly={displayMonthly}
              selected={selectedPlan == "pro"}
              onClick={() => {
                setSelectedPlan("pro");
              }}
            />
          </div>
          <div className="plan-toggle">
            <h2>Monthly</h2>
            <label className="switch" tabIndex="0">
              <input
                type="checkbox"
                checked={!displayMonthly}
                onChange={handleCheckboxChange}
              />
              <span className="slider"></span>
            </label>
            <h2>Yearly</h2>
          </div>
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
