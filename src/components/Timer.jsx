import { useEffect, useState } from "react";
const Timer = () => {
  const [time, setTime] = useState(0);
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    let id;
    if (toggle) {
      id = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => {
      clearInterval(id);
    };
  }, [toggle]);
  return (
    <section className="flex flex-col justify-center items-center h-screen w-screen bg-[#1f96028a]">
      <h1>{time}</h1>
      <button
        className={`${toggle ? `bg-red-300` : `bg-green-300`} p-4` }
        onClick={() => setToggle(!toggle)}
      >
        {toggle ? "pause" : "resume"}
      </button>
    </section>
  );
};
export default Timer;
