import { useSelector } from "react-redux";
import Page1 from "./step1/Page1";
import Page2 from "./step2/Page2";
import Page3 from "./step3/Page3";
import Page4 from "./step4/Page4";
import ThankYou from "./ThankYou";

export default function Form() {
  const step = useSelector((state) => state.form.step);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        {step == 1 ? (
          <Page1 />
        ) : step == 2 ? (
          <Page2 />
        ) : step == 3 ? (
          <Page3 />
        ) : step == 4 ? (
          <Page4 />
        ) : (
          <ThankYou />
        )}
      </form>
    </>
  );
}
