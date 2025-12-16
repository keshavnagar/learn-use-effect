import { useState } from "react";

const BgColorChanger = () => {
  const [color, setColor] = useState("#DDDF31");
  return (
    <section
      style={{ backgroundColor: color }}
      className={`h-screen w-screen flex flex-col items-center justify-center  gap-2`}
    >
      <button
        className="bg-[#311E10] text-[#ECE4B7] p-4 text-[2rem]"
        onClick={() => {
          const randomColor =
            `#` +
            Math.floor(Math.random() * 16777215)
              .toString(16)
              .padStart(6, "0");
          setColor(randomColor);
        }}
      >
        Change Colour
      </button>
      <h1 className="bg-[#123412] text-[#EABE7C] p-4 text-[2rem]">Color code is : {color}</h1>
    </section>
  );
};
export default BgColorChanger;
