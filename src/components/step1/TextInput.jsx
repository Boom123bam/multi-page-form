import { useRef, useState } from "react";

export default function TextInput({
  label,
  varName,
  placeholder,
  valid,
  type,
  sendToParent,
}) {
  // const value = useRef("");
  const handleInputChange = (event) => {
    // value.current = event.target.value;
    // console.log("change");
    sendToParent({ [varName]: event.target.value });
  };
  return (
    <div className="input-field">
      <label>{label}</label>
      {!valid && (
        <span className="required-message">
          This field is required
        </span>
      )}

      <input
        type={type}
        onChange={handleInputChange}
        placeholder={placeholder}
      />
    </div>
  );
}
