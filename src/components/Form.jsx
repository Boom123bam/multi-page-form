import TextInput from "./step1/TextInput";
import Page1 from "./step1/Page1";

export default function Form({ step, setStep }) {
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

        <Page1 />
      </form>
    </>
  );
}
