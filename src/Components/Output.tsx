import { useEffect } from "react";
import axios from "axios";
import Types from "../types.ts";

import playIcon from "../assets/images/icon-play.svg";

interface Props {
  search: string;
  wordData: Types | null;
  setWordData: (wordData: null) => void;
}

export default function Output({ search, wordData, setWordData }: Props) {
  useEffect(() => {
    const findWord = async () => {
      try {
        const response = await axios.get(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${search}`
        );
        const data = response.data[0];
        setWordData(data);
      } catch (error) {
        console.log("error");
      }
    };
    findWord();
  }, [search]);
  console.log(wordData);

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
    <div className={`w-full max-w-[327px] my-6`}>
      <div className={`flex justify-between items-center`}>
        <div className={`flex flex-col gap-2`}>
          <h1 className={`text-[32px] leading-[38px] text-[#2D2D2D] font-bold`}>
            {wordData?.word}
          </h1>
          <h2 className={`text-[18px] leading-6 text-[#A445ED] font-normal`}>
            {wordData?.phonetic}
          </h2>
        </div>
        <img
          src={playIcon}
          alt="Play Icon"
          className="w-12 h-12 cursor-pointer"
          onClick={playAudio}
        />
      </div>
      {wordData?.meanings.map((meaning, index) => (
        <div key={index}>
          <div className={`flex gap-4 items-center my-[30px]`}>
            <p
              className={`text-[#2D2D2D] text-[18px] leading-5 font-bold italic`}
            >
              {meaning.partOfSpeech}
            </p>
            <hr className={`w-full h-[1px]`} />
          </div>
          <h1
            className={`font-normal text-4 leading-[19px] text-[#757575] mb-[17px]`}
          >
            Meaning
          </h1>
          {meaning.definitions.map((explain, index) => (
            <ul className={`list-disc text-[#8F19E8] max-w-[302px] ml-5`}>
              <li key={index}>
                <h1 className={`text-black text-[15px] leading-6 mb-[13px] `}>
                  {explain.definition}
                </h1>
              </li>
            </ul>
          ))}
          {meaning.synonyms.map((synonym, index) => (
            <div className={`flex gap-6 items-center mt-10`}>
              <h1
                className={`font-normal text-4 leading-[19px] text-[#757575]`}
              >
                Synonyms
              </h1>
              <h2
                className={`text-[#A445ED] font-bold text-4 leading-[19px]`}
                key={index}
              >
                {synonym}
              </h2>
            </div>
          ))}
        </div>
      ))}
      <hr className={`w-full h-[1px] my-6`} />
      <div>
        <h1
          className={`text-[14px] leading-[17px] font-normal text-[#757575] underline`}
        >
          Source
        </h1>
        <h2
          className={`text-[14px] leading-[17px] font-normal text-[#2D2D2D] underline mt-2`}
        >
          {wordData?.sourceUrls}
        </h2>
      </div>
    </div>
  );
}