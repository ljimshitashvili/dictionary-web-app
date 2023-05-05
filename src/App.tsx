import Header from "./Components/Header";
import Input from "./Components/Input";
import Output from "./Components/Output";
import Types from "./types";

import { useState } from "react";
import GlobalStyles from "./GlobalStyles";

function App() {
  const [font, setFont] = useState<string>("sansSerif");
  const [light, setLight] = useState<boolean>(true);
  const [search, setSearch] = useState<string>("keyboard");
  const [wordData, setWordData] = useState<Types | null>(null);
  const [result, setResult] = useState<boolean>(true);

  return (
    <div
      className={`w-full min-h-[100vh] flex flex-col items-center px-6 ${
        light ? "bg-white" : "bg-[#050505]"
      }`}
    >
      <GlobalStyles font={font} />
      <Header setFont={setFont} font={font} light={light} setLight={setLight} />
      <Input search={search} setSearch={setSearch} light={light} />
      <Output
        search={search}
        wordData={wordData}
        setWordData={setWordData}
        light={light}
        result={result}
        setResult={setResult}
      />
    </div>
  );
}

export default App;
