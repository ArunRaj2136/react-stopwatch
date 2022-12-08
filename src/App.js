import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import Functionality from "./components/Functionality";

function App() {
  return (
    <>
      <h1 className="App">Stop Watch</h1>
      <Input />
      <Button name="Start" type="submit" />
      <Button name="Pause" type="submit" />
      <Button name="clear" type="reset" />
      <Functionality />
    </>
  );
}

export default App;
