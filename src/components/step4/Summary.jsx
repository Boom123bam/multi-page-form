import { useSelector } from "react-redux";
export default function Summary() {
  const data = useSelector((state) => state.form.data);

  return (
    <div className="summary">
      <div className="top">
        <div className="plan">
          <h2>{`${data.plan} (${
            data.monthly ? "Monthly" : "Yearly"
          })`}</h2>
          <h3>Change</h3>
        </div>
        <h2 className="price"></h2>
      </div>
    </div>
  );
}
