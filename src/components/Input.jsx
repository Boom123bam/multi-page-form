import { useState } from "react";

export default function Input({ step, setStep }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    nameValid: true,
    phoneValid: true,
    emailValid: true,
  });

  const handleInputChange = (event) => {
    console.log(event.target.name);
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  function handleNext() {
    if (step < 4) setStep(step + 1);
    if (formData.name) {
      formData.nameValid = true;
    } else formData.nameValid = false;
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-title">
          <h1 className="bold">Personal Info</h1>
          <h3>
            Please provide your name, email address, and phone number.
          </h3>
        </div>

        <div className="inputs">
          <div className="input-field">
            <label>Name</label>
            {!formData.nameValid && (
              <span className="required-message">
                This field is required
              </span>
            )}

            <input
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="e.g. Stephen King"
              name="name"
            />
          </div>
          <div className="input-field">
            <label>Email Address</label>
            {!formData.emailValid && (
              <span className="required-message">
                This field is required
              </span>
            )}
            <input
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="e.g. stephenking@lorem.com"
              name="email"
            />
          </div>
          <div className="input-field">
            <label>Phone Number</label>
            {!formData.phoneValid && (
              <span className="required-message">
                This field is required
              </span>
            )}
            <input
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="e.g. +1 234 567 890"
              name="phone"
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
      </form>
    </>
  );
}
