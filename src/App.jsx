import { useEffect, useState } from "react";
import UE from "./components/UE";
import Practical from "./components/Practical";
import CounterDocTitle from "./components/CounterDocTitle";
import BgColorChanger from "./components/BgColorChanger";
import Timer from "./components/Timer";
import TwoUseEffect from "./components/TwoUseEffect";
const App = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      {/* <UE /> */}
      {/* <Practical /> */}
      {/* <CounterDocTitle/> */}
      {/* <BgColorChanger/> */}
      {/* <Timer/> */}
      <button
        onClick={() => {
          setShow(!show);
        }}
      >{show ? 'hide' : 'show'}</button>
      {show && <TwoUseEffect />}
    </>
  );
};
export default App;
