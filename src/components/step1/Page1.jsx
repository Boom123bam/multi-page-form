import { useState } from "react";
import TextInput from "./TextInput";

export default function Page1({ params }) {
  const [formPageData, setFormPageData] = useState({});

  const handleInputData = (data) => {
    setFormPageData({
      ...formPageData,
      ...data,
    });
    console.log(formPageData);
  };
  return (
    <>
      <div className="form-content">
        <div className="inputs">
          <TextInput
            label="Name"
            varName="name"
            placeholder="e.g. Stephen King"
            valid={true}
            type="text"
            sendToParent={handleInputData}
          />
          <TextInput
            label="Email Adress"
            varName="email"
            placeholder="e.g. stephenking@lorem.com"
            valid={true}
            type="email"
            sendToParent={handleInputData}
          />
          <TextInput
            label="Phone Number"
            varName="phone"
            placeholder="e.g. +1 234 567 890"
            valid={true}
            type="tel"
            sendToParent={handleInputData}
          />
        </div>
      </div>
      <div className="buttons">
        <button
          className="back"
          onClick={() => {
            if (step > 1) setStep(step - 1);
          }}
        >
          Go Back
        </button>
        <button
          className="next"
          onClick={() => {
            handleNext();
          }}
        >
          Next Step
        </button>
      </div>
    </>
  );
}
