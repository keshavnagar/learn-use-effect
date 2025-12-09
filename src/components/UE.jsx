import { useEffect, useState } from "react";
const UE = () => {
  const [date, setDate] = useState(0);
  setInterval(() => {
    const updatedDate = new Date();
    setDate(updatedDate.toLocaleTimeString());
  }, 1000);
  useEffect(
    () => {
      // side effect code

      return () => {};
    },
    [
      /*dependency*/
    ]
  );
  return (
    <>
      <h1>Hello UseEffect</h1>
      <h1>Date: {date}</h1>
    </>
  );
};

export default UE;
