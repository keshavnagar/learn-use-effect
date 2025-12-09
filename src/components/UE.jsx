import { useEffect } from "react";
const UE = () => {
  useEffect(
    () => {
      // side effect code
      console.log("component is mounted")
      return () => {};
    },
    [
      /*dependency*/
    ]
  );
  return (
    <>
      <h1>Hello UseEffect</h1>
    </>
  );
};

export default UE;
