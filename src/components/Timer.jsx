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
      {time !== 0 && (
        <button
          className={`${toggle ? `bg-red-300` : `bg-green-300`} p-4 shadow-2xl`}
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? "pause" : "resume"}
        </button>
      )}
      {time !== 0 && (
        <button
          onClick={() => {
            setTime(0);
            setToggle(false);
          }}
          className="bg-red-300 m-2 p-4"
        >
          Reset
        </button>
      )}
      {time === 0 && (
        <button
          className="bg-green-300 m-2 p-4"
          onClick={() => {
            setTime(0);
            setToggle(true);
          }}
        >
          start
        </button>
      )}
    </section>
  );
};
export default Timer;
