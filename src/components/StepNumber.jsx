export default function StepNumber({ num, name, active }) {
  return (
    <div className="step">
      <div className={`step-circle${active ? " fill" : ""}`}>
        <span>{num}</span>
      </div>
      <div className="text desktop">
        <h4>Step {num}</h4>
        <h2 className="bold">{name}</h2>
      </div>
    </div>
  );
}
