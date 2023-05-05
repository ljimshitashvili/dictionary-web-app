import emoji from "../assets/images/emoji.png";

interface Props {
  result: boolean;
}

export default function NoResult({ result }: Props) {
  return (
    <div
      className={`flex-col items-center gap-6 lg:mt-[132px] ${
        result ? "hidden" : "flex"
      }`}
    >
      <img src={emoji} alt="Emoji" className={`w-16 h-16 mb-5`} />
      <h1 className={`text-5 leading-6 font-bold text-[#2D2D2D]`}>
        No Definitions Found
      </h1>
      <p
        className={`font-normal text-[18px] leading-6 text-[#757575] text-center`}
      >
        Sorry pal, we couldn't find definitions for the word you were looking
        for. You can try the search again at later time or head to the web
        instead.
      </p>
    </div>
  );
}
