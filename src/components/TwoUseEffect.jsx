import { useEffect, useState } from "react";

const TwoUseEffect = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("component mount for: ", count);
    return () => {
      console.log("component unmount for: ", count);
    };
  }, [count]);
  return (
    <button
      onClick={() => {
        setCount(count + 1);
      }}
    >
      change count
    </button>
  );
};

export default TwoUseEffect;
