import Buttons from "../Buttons";
import { useDispatch } from "react-redux";
import { prevStep, nextStep, editData } from "../../redux/formSlice";
import AddOn from "./AddOn";
import { useState } from "react";

export default function Page3() {
  const dispatch = useDispatch();

  const [addOns, setAddOns] = useState({
    onlineService: false,
    largerStorage: false,
    customizableProfile: false,
  });

  function handleNext() {
    dispatch(editData({ addOns }));
    dispatch(nextStep());
  }

  return (
    <>
      {" "}
      <div className="form-content-wrapper">
        <div className="form-title">
          <h1 className="bold">Pick add-ons</h1>
          <h3>Add-ons help enhance your gaming experience.</h3>
        </div>

        <div className="form-content">
          <div className="add-ons">
            <AddOn
              title="Online service"
              description="Access to multiplayer games"
              selected={addOns.onlineService}
              monthlyPrice={1}
              yearlyPrice={10}
              onChange={() => {
                setAddOns({
                  ...addOns,
                  onlineService: !addOns.onlineService,
                });
              }}
            />
            <AddOn
              title="Larger storage"
              description="Extra 1TB of cloud save"
              selected={addOns.largerStorage}
              monthlyPrice={2}
              yearlyPrice={20}
              onChange={() => {
                setAddOns({
                  ...addOns,
                  largerStorage: !addOns.largerStorage,
                });
              }}
            />
            <AddOn
              title="Customizable profile"
              description="Custom theme on your profile"
              selected={addOns.customizableProfile}
              monthlyPrice={2}
              yearlyPrice={20}
              onChange={() => {
                setAddOns({
                  ...addOns,
                  customizableProfile: !addOns.customizableProfile,
                });
              }}
            />
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
