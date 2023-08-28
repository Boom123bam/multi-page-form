import { useSelector } from "react-redux";

export default function AddOn({
  title,
  description,
  selected,
  monthlyPrice,
  yearlyPrice,
  onChange,
}) {
  const monthly = useSelector((state) => state.form.data.monthly);

  return (
    <div className="add-on">
      <label className="checkbox" tabIndex="0">
        <div className="wrapper">
          <input
            type="checkbox"
            checked={selected}
            onChange={onChange}
          />
          <div className="box">
            <img
              src="assets/images/icon-checkmark.svg"
              alt="checkbox"
            />
          </div>

          <div className="text">
            <h2 className="title">{title}</h2>
            <h3 className="description">{description}</h3>
          </div>

          <div className="price">
            {monthly ? `+$${monthlyPrice}/mo` : `+$${yearlyPrice}/yr`}
          </div>
        </div>
      </label>
    </div>
  );
}
