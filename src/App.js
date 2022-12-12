import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import Functionality from "./components/Functionality";
import { useEffect, useState } from "react";

function App() {
  const [time, setTime] = useState("");
  const [start, setStart] = useState(false);
  const getTimeHandler = (time) => {
    setTime(time);
  };
  const startHandler = () => {
    setStart(true);
  };

  useEffect(() => {
    let aa =
      start &&
      setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
    return () => clearInterval(aa);
  }, [start]);

  return (
    <>
      <h1 className="App">Stop Watch</h1>
      <hr></hr>
      <Input onGetTime={getTimeHandler} />
      <button name="Start" onClick={startHandler}>
        start
      </button>
      <Button name="Pause" type="submit" />
      <Button name="clear" type="reset" />
      {/* <Functionality /> */}
      {time}
    </>
  );
}

export default App;
