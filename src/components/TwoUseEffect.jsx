import { useEffect, useState } from "react";

const TwoUseEffect = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(count, "comes");
    return () => {
      console.log(count, "goes");
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
