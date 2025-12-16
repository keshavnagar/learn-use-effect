import { useEffect, useState } from "react";

const BgColorChanger = () => {
  const [color, setColor] = useState("#DDDF31");
  useEffect(() => {
    const id = setInterval(() => {
      const randomColor =
        `#` +
        Math.floor(Math.random() * 16777215)
          .toString(16)
          .padStart(6, "0");
      setColor(randomColor);
    }, 2000);
    return () => {
      clearInterval(id);
    };
  }, []);
  return (
    <section
      style={{ backgroundColor: color }}
      className={`h-screen w-screen flex flex-col items-center justify-center  gap-2`}
    >
      <h1 className="bg-[#123412] text-[#EABE7C] p-4 text-[2rem]">
        Color code is : {color}
      </h1>
    </section>
  );
};
export default BgColorChanger;
