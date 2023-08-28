import "./App.css";
import FormCard from "./components/FormCard";
function App() {
  const handleKeyPress = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.target.click();
    }
  };
  return (
    <>
      <div id="wrapper" onKeyPress={handleKeyPress}>
        <FormCard />
      </div>
    </>
  );
}

export default App;
