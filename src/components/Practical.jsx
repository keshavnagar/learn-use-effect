import { useEffect, useState } from "react";

const Practical = () => {
  const [time, setTime] = useState();

  useEffect(() => {
    const id = setInterval(() => {
      const updateTime = new Date();
      setTime(updateTime.toLocaleTimeString());
      console.log(updateTime);
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);
  return (
    <>
      <h1>{time}</h1>
    </>
  );
};
export default Practical;
