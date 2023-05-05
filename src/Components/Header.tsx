import Logo from "../assets/images/logo.svg";
import Moon from "../assets/images/icon-moon.svg";
import Arrow from "../assets/images/icon-arrow-down.svg";

import { useState } from "react";

interface Props {
  font: string;
  setFont: (font: string) => void;
  light: boolean;
  setLight: (light: boolean) => void;
}

export default function Header({ setFont, light, setLight }: Props) {
  const [fontDiv, setFontDiv] = useState<boolean>(true);
  const [fontName, setFontName] = useState<string>("Sans Serif");

  const handleClick = () => {
    setFontDiv(!fontDiv);
  };

  return (
    <header className="flex w-full max-w-[327px] justify-between py-6">
      <img src={Logo} alt="Logo" />
      <div className="flex items-center gap-4">
        <div
          className="flex gap-4 cursor-pointer relative "
          onClick={handleClick}
        >
          <h1
            className={`text-[14px] leading-6  normal font-bold ${
              light ? "text-[#2D2D2D]" : "text-white"
            }`}
          >
            {fontName}
          </h1>
          <img src={Arrow} alt="Arrow Icon" />
          <div
            className={`min-w-[100px] absolute -left-3 top-8  p-3 rounded-[8px] shadow-lg  ${
              fontDiv ? "hidden" : "block"
            } ${light ? "bg-white" : "bg-[#050505] shadow-[#A445ED]"}`}
          >
            <p
              className={` text-[14px] leading-6 text-[#2D2D2D] ${
                light ? "text-[#2D2D2D]" : "text-white"
              }`}
              onClick={() => {
                setFont("'Inter', sans-serif");
                setFontName("Sans Serif");
              }}
            >
              Sans Serif
            </p>
            <p
              className={` text-[14px] leading-6 text-[#2D2D2D] ${
                light ? "text-[#2D2D2D]" : "text-white"
              }`}
              onClick={() => {
                setFont("'Lora', serif");
                setFontName("Serif");
              }}
            >
              Serif
            </p>
            <p
              className={` text-[14px] leading-6 text-[#2D2D2D] ${
                light ? "text-[#2D2D2D]" : "text-white"
              }`}
              onClick={() => {
                setFont("'Inconsolata', monospace");
                setFontName("Mono");
              }}
            >
              Mono
            </p>
          </div>
        </div>
        <hr className="w-[1px] h-8 bg-[#E9E9E9] border-0" />
        <label
          className={`w-10 h-5 bg-[#757575] rounded-[10px] px-[3px] flex items-center cursor-pointer ${
            light ? "bg-[#757575]" : "bg-[#A445ED]"
          }`}
        >
          <input
            onClick={() => {
              setLight(!light);
            }}
            type="checkbox"
            className={`w-[14px] h-[14px] appearance-none bg-white rounded-full cursor-pointer transition-all ${
              light ? "translate-x-0" : "translate-x-5"
            }`}
          />
        </label>
        <img src={Moon} />
      </div>
    </header>
  );
}
