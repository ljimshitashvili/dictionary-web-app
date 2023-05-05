import Header from "./Components/Header";

import { useState } from "react";
import GlobalStyles from "./GlobalStyles";

function App() {
  const [font, setFont] = useState<string>("sansSerif");
  const [light, setLight] = useState<boolean>(true);

  return (
    <div
      className={`w-full min-h-[100vh] flex flex-col items-center ${
        light ? "bg-white" : "bg-[#050505]"
      }`}
    >
      <GlobalStyles font={font} />
      <Header setFont={setFont} font={font} light={light} setLight={setLight} />
    </div>
  );
}

export default App;
