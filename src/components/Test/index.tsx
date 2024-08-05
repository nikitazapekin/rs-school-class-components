/*
import { useState } from "react";
const Test = () => {
  const [count, setCount] = useState(0)
  const handle =() => {
    setCount(prev=>prev+1)
  }
  return (  <>
    <button onClick={handle}>clic</button>
    {count}
    </>);
}
 
export default Test;

*/
// app/routes/Counter.jsx
import { useState } from "react";

function Test() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}

export default Test;
