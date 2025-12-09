import { useEffect } from "react";
import UE from "./components/UE";
const App = () => {
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
      <UE />
    </>
  );
};
export default App;
