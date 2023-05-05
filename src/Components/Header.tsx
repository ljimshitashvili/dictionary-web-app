import Logo from "../assets/images/logo.svg";
import Moon from "../assets/images/icon-moon.svg";
import Arrow from "../assets/images/icon-arrow-down.svg";
import { useState } from "react";

interface Props {
  fontDiv: boolean;
  setFontDiv: (fontDiv: boolean) => void;
  font: string;
  setFont: (font: string) => void;
}

export default function Header({ fontDiv, setFontDiv, setFont }: Props) {
  const [fontName, setFontName] = useState<string>("Sans Serif");

  const handleClick = () => {
    setFontDiv(!fontDiv);
  };

  const makeMono = () => {
    setFont("'Inconsolata', monospace");
    setFontName("Mono");
  };

  const makeSerif = () => {
    setFont("'Lora', serif");
    setFontName("Serif");
  };

  const makeSans = () => {
    setFont("'Inter', sans-serif");
    setFontName("Sans Serif");
  };

  return (
    <header className="flex w-full max-w-[327px] justify-between p-6">
      <img src={Logo} alt="Logo" />
      <div className="flex items-center gap-4">
        <div
          className="flex gap-4 cursor-pointer relative "
          onClick={handleClick}
        >
          <h1 className="text-[14px] leading-6 text-[#2D2D2D] normal font-bold ">
            {fontName}
          </h1>
          <img src={Arrow} alt="Arrow Icon" />
          <div
            className={`min-w-[100px] absolute -left-3 top-8 bg-white p-3 rounded-[8px] ${
              fontDiv ? "hidden" : "block"
            }`}
          >
            <p
              className=" text-[14px] leading-6 text-[#2D2D2D] "
              onClick={makeSans}
            >
              Sans Serif
            </p>
            <p
              className=" text-[14px] leading-6 text-[#2D2D2D] "
              onClick={makeSerif}
            >
              Serif
            </p>
            <p
              className=" text-[14px] leading-6 text-[#2D2D2D] "
              onClick={makeMono}
            >
              Mono
            </p>
          </div>
        </div>
        <hr className="w-[1px] h-8 bg-[#E9E9E9] border-0" />
        <label className="w-10 h-5 bg-[#757575] rounded-[10px] px-[3px] flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="w-[14px] h-[14px] appearance-none bg-white rounded-full cursor-pointer"
          />
        </label>
        <img src={Moon} />
      </div>
    </header>
  );
}
