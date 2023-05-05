import Header from "./Components/Header";
import Input from "./Components/Input";
import Output from "./Components/Output";
import Types from "./types";

import { useState } from "react";
import GlobalStyles from "./GlobalStyles";

function App() {
  const [font, setFont] = useState<string>("sansSerif");
  const [light, setLight] = useState<boolean>(true);
  const [search, setSearch] = useState<string>("");
  const [wordData, setWordData] = useState<Types | null>(null);

  return (
    <div
      className={`w-full min-h-[100vh] flex flex-col items-center ${
        light ? "bg-white" : "bg-[#050505]"
      }`}
    >
      <GlobalStyles font={font} />
      <Header setFont={setFont} font={font} light={light} setLight={setLight} />
      <Input search={search} setSearch={setSearch} light={light} />
      <Output search={search} wordData={wordData} setWordData={setWordData} />
    </div>
  );
}

export default App;
