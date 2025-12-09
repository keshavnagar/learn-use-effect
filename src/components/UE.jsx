import { useEffect, useState } from "react";
const UE = () => {
  const [date, setDate] = useState(0);

  useEffect(
    () => {
      // side effect code
      const intervalId = setInterval(() => {
        const updatedDate = new Date();
        setDate(updatedDate.toLocaleTimeString());
        console.log(updatedDate);
      }, 1000);
      return () => clearInterval(intervalId);
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
