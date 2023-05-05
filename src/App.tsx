import Header from "./Components/Header";

import { useState } from "react";
import GlobalStyles from "./GlobalStyles";

function App() {
  const [fontDiv, setFontDiv] = useState<boolean>(true);
  const [font, setFont] = useState<string>("sansSerif");

  return (
    <div className="w-full min-h-[100vh] flex flex-col items-center">
      <GlobalStyles font={font} />
      <Header
        fontDiv={fontDiv}
        setFontDiv={setFontDiv}
        setFont={setFont}
        font={font}
      />
    </div>
  );
}

export default App;
