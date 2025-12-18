import { useEffect } from "react";

const TwoUseEffect = () => {
  useEffect(() => {
    console.log("component mount");
    return () => {
      console.log("component unmount");
    };
  }, []);
  return <></>;
};

export default TwoUseEffect;
