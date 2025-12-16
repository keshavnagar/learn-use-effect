import { useEffect, useState } from "react";
import { jsx } from "react/jsx-runtime";

const CounterDocTitle = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = count;
  }, [count]);
  return (
    <>
      <h1>Counter with Document title</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </>
  );
};
export default CounterDocTitle;
