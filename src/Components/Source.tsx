import Types from "../types";
import linkIcon from "../assets/images/icon-new-window.svg";

interface Props {
  light: boolean;
  wordData: Types | null;
}

export default function Source({ light, wordData }: Props) {
  return (
    <div className="max-w-[327px] md:max-w-[690px] lg:max-w-[736px] ">
      <h1
        className={`text-[14px] leading-[17px] font-normal text-[#757575] underline `}
      >
        Source
      </h1>
      <h2
        className={`text-[14px] leading-[17px] font-normal underline mt-2 flex gap-[9px] max-w-[327px] overflow-clip ${
          light ? "text-[#2D2D2D]" : "text-[#FFFFFF]"
        }`}
      >
        {wordData?.sourceUrls}
        <a href={`${wordData?.sourceUrls}`} target="_blank">
          <img src={linkIcon} alt="Icon" />
        </a>
      </h2>
    </div>
  );
}
