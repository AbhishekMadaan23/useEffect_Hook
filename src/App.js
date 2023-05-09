import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => console.log("component mounted"), []); //this will be triggered only first time when the component gets mounted - component mounts only once and later it gets re-rendered

  useEffect(() => console.log("component renders")); //this will be triggered every time either component mounted or gets re-rendered

  useEffect(
    //this will be triggered whenever our dependency list changes either props or state variable
    function () {
      console.log("dependency list change");

      return () =>
        console.log("cleanup function is triggered-component unmounted"); //useEffect also provides a cleanup function which gets triggered when a component unmounted quickly before re-rendering
    },
    [count]
  );

  function incrementCount() {
    // setCount(count+1);
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <div>
      <h1>hello world</h1>
      <button onClick={incrementCount}>+</button>
      <span>{count}</span>
    </div>
  );
}

export default App;
