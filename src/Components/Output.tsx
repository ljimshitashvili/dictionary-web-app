import { useEffect } from "react";
import axios from "axios";
import Types from "../types.ts";

import playIcon from "../assets/images/icon-play.svg";

import NoResult from "./NoResult.tsx";
import Definition from "./Definition.tsx";
import Source from "./Source.tsx";

interface Props {
  search: string;
  wordData: Types | null;
  setWordData: (wordData: null) => void;
  light: boolean;
  setResult: (result: boolean) => void;
  result: boolean;
}

export default function Output({
  search,
  wordData,
  setWordData,
  light,
  setResult,
  result,
}: Props) {
  useEffect(() => {
    const findWord = async () => {
      try {
        const response = await axios.get(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${search}`
        );
        const data = response.data[0];
        setWordData(data);
        setResult(true);
      } catch (error) {
        setResult(false);
      }
    };
    findWord();
  }, [search]);
  console.log(light);

  const playAudio = () => {
    const phonetics = wordData?.phonetics ?? [];
    const phoneticsWithAudio = phonetics.filter((p) => p.audio !== "");
    const firstPhoneticWithAudio = phoneticsWithAudio.shift();

    if (firstPhoneticWithAudio) {
      const audio = new Audio(firstPhoneticWithAudio.audio);
      audio.play();
    }
  };

  return (
    <div
      className={`w-full max-w-[327px] my-6 md:max-w-[690px] md:my-[50px] lg:max-w-[736px] `}
    >
      <NoResult result={result} search={search} />
      <div className={`${result ? "" : "hidden"}`}>
        <div className={`flex justify-between items-center`}>
          <div className={`flex flex-col gap-2`}>
            <h1
              className={`text-[32px] leading-[38px] font-bold md:text-[64px] md:leading-[67px] lg:leading-[77px] ${
                light ? "text-[#2D2D2D]" : "text-[#FFFFFF]"
              }`}
            >
              {wordData?.word}
            </h1>
            <h2
              className={`text-[18px] leading-6 text-[#A445ED] font-normal md:text-[18px] md:leading-[29px] lg:text-[24px] `}
            >
              {wordData?.phonetic}
            </h2>
          </div>
          <img
            src={playIcon}
            alt="Play Icon"
            className="w-12 h-12 cursor-pointer md:w-[75px] md:h-[75px]"
            onClick={playAudio}
          />
        </div>
        <Definition wordData={wordData} light={light} />
        <hr
          className={`w-full h-[1px] my-6  ${
            light ? "bg-[#E9E9E9]" : "bg-[#3A3A3A] opacity-50"
          }`}
        />
        <Source light={light} wordData={wordData} />
      </div>
    </div>
  );
}
