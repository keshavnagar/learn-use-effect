import { useState } from "react";

const BgColorChanger = () => {
  const [color, setColor] = useState("#DDDF31");
  return (
    <section
      style={{ backgroundColor: color }}
      className={`h-screen w-screen flex items-center justify-center `}
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
    </section>
  );
};
export default BgColorChanger;
