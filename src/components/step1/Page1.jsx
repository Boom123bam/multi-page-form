import { useState, useRef } from "react";
import TextInput from "./TextInput";
import { useDispatch } from "react-redux";
import { editData, nextStep } from "../../redux/formSlice";
import Buttons from "../Buttons";

export default function Page1() {
  const dispatch = useDispatch();

  const formPageData = useRef({
    name: "",
    email: "",
    phone: "",
  });
  const [requiredMessages, setRequiredMessages] = useState({
    name: false,
    email: false,
    phone: false,
  });

  function handleInputDataChange(data) {
    formPageData.current = {
      ...formPageData.current,
      ...data,
    };
  }

  function validate() {
    setRequiredMessages({
      name: formPageData.current.name === "",
      email: formPageData.current.email === "",
      phone: formPageData.current.phone === "",
    });
    return (
      formPageData.current.name != "" &&
      formPageData.current.email != "" &&
      formPageData.current.phone != ""
    );
  }

  function handleNext() {
    if (validate()) {
      dispatch(nextStep());
      dispatch(editData(formPageData.current));
    }
  }

  return (
    <>
      <div className="form-content-wrapper">
        <div className="form-title">
          <h1 className="bold">Personal Info</h1>
          <h3>
            Please provide your name, email address, and phone number.
          </h3>
        </div>

        <div className="form-content">
          <div className="inputs">
            <TextInput
              label="Name"
              varName="name"
              placeholder="e.g. Stephen King"
              showMessage={requiredMessages.name}
              type="text"
              sendToParent={handleInputDataChange}
            />
            <TextInput
              label="Email Adress"
              varName="email"
              placeholder="e.g. stephenking@lorem.com"
              showMessage={requiredMessages.email}
              type="text"
              sendToParent={handleInputDataChange}
            />
            <TextInput
              label="Phone Number"
              varName="phone"
              placeholder="e.g. +1 234 567 890"
              showMessage={requiredMessages.phone}
              type="tel"
              sendToParent={handleInputDataChange}
            />
          </div>
        </div>
      </div>

      <div className="buttons">
        <Buttons
          // back={() => {
          //   dispatch(prevStep());
          // }}
          next={() => {
            handleNext();
          }}
        />
      </div>
    </>
  );
}
