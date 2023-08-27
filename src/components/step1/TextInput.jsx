export default function TextInput({
  label,
  varName,
  placeholder,
  showMessage,
  type,
  sendToParent,
}) {
  const handleInputChange = (event) => {
    sendToParent({ [varName]: event.target.value });
  };
  return (
    <div className="input-field">
      <label>{label}</label>
      {showMessage && (
        <span className="required-message">
          This field is required
        </span>
      )}

      <input
        type={type}
        onChange={handleInputChange}
        placeholder={placeholder}
        className={`${showMessage ? "invalid" : ""}`}
      />
    </div>
  );
}
