import Types from "../types";

interface Props {
  wordData: Types | null;
  light: boolean;
  search: string;
  setSearch: (search: string) => void;
}
export default function Definition({ wordData, light, search }: Props) {
  console.log(search);
  return (
    <div>
      {wordData?.meanings.map((meaning, index) => (
        <div key={index}>
          <div className={`flex gap-4 items-center my-[30px]`}>
            <p
              className={` text-[18px] leading-5 font-bold italic md:text-[24px] md:leading-[25px] ${
                light ? "text-[#2D2D2D]" : "text-[#FFFFFF]"
              }`}
            >
              {meaning.partOfSpeech}
            </p>
            <hr
              className={`w-full h-[1px] my-6  ${
                light ? "bg-[#E9E9E9]" : "bg-[#3A3A3A] opacity-50"
              }`}
            />
          </div>
          <h1
            className={`font-normal text-4 leading-[19px] text-[#757575] mb-[17px] md:text-5 md:leading-6`}
          >
            Meaning
          </h1>
          {meaning.definitions.map((explain, index) => (
            <ul
              className={`list-disc text-[#8F19E8] max-w-[302px] ml-5 md:max-w-[690px] md:ml-[43px]`}
            >
              <li key={index}>
                <h1
                  className={` text-[15px] leading-6 mb-[13px] md:text-[18px] 
                ${light ? "text-black" : "text-[#FFFFFF]"}`}
                >
                  {explain.definition}
                </h1>
              </li>
            </ul>
          ))}

          <div className="flex gap-3">
            <h1 className={`font-normal text-4 leading-[19px] text-[#757575]`}>
              Synonyms
            </h1>
            {meaning.synonyms.map((synonym, index) => (
              <div
                className={`flex gap-6 items-center flex-row w-fit `}
                key={index}
              >
                <h2
                  id="synonym"
                  className={`text-[#A445ED] font-bold text-4 leading-[19px] cursor-pointer hover:underline`}
                >
                  {synonym}
                </h2>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
