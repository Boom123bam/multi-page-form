import { useDispatch, useSelector } from "react-redux";
import { setStep } from "../../redux/formSlice";

export default function Summary() {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.form.data);
  const prices = {
    arcade: 9,
    advanced: 12,
    pro: 15,
    onlineService: 1,
    largerStorage: 2,
    customizableProfile: 2,
  };
  const monthlyTotal =
    prices[data.plan] +
    data.addOns.onlineService * prices.onlineService +
    data.addOns.largerStorage * prices.largerStorage +
    data.addOns.customizableProfile * prices.customizableProfile;

  return (
    <div className="summary">
      <div className="card">
        <div className="top">
          <div className="plan">
            <h2 className="bold">{`${data.plan} (${
              data.monthly ? "Monthly" : "Yearly"
            })`}</h2>
            <h3
              onClick={() => {
                dispatch(setStep(2));
              }}
            >
              Change
            </h3>
          </div>
          <h2 className="price bold">{`$${
            data.monthly ? prices[data.plan] : prices[data.plan] * 10
          }/${data.monthly ? "mo" : "yr"}`}</h2>
        </div>
        {(data.addOns.onlineService ||
          data.addOns.largerStorage ||
          data.addOns.customizableProfile) && <hr />}
        <div className="bottom">
          {data.addOns.onlineService && (
            <div className="add-on">
              <h2>Online Service</h2>
              <h3>{`+$${
                data.monthly
                  ? prices.onlineService
                  : prices.onlineService * 10
              }/${data.monthly ? "mo" : "yr"}`}</h3>
            </div>
          )}
          {data.addOns.largerStorage && (
            <div className="add-on">
              <h2>Larger Storage</h2>
              <h3>{`+$${
                data.monthly
                  ? prices.largerStorage
                  : prices.largerStorage * 10
              }/${data.monthly ? "mo" : "yr"}`}</h3>
            </div>
          )}
          {data.addOns.customizableProfile && (
            <div className="add-on">
              <h2>Customizable Profile</h2>
              <h3>{`+$${
                data.monthly
                  ? prices.customizableProfile
                  : prices.customizableProfile * 10
              }/${data.monthly ? "mo" : "yr"}`}</h3>
            </div>
          )}
        </div>
      </div>
      <div className="total">
        <h2>{`Total (per ${data.montly ? "month" : "year"})`}</h2>
        <h1 className="bold">{`+$${
          data.monthly ? monthlyTotal : monthlyTotal * 10
        }/${data.monthly ? "mo" : "yr"}`}</h1>
      </div>
    </div>
  );
}
