import { useEffect, useState } from "react";
const UE = () => {
  const [count, setCount] = useState(0);
  useEffect(
    () => {
      // side effect code
      console.log("component mounted");
      return () => {};
    },
    [
      /*dependency*/
    ]
  );
  return (
    <>
      <h1>Hello UseEffect</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
};

export default UE;
