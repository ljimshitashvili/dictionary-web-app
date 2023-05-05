import searchIcon from "../assets/images/icon-search.svg";

interface Props {
  search: string;
  setSearch: (search: string) => void;
  light: boolean;
}

export default function Input({ setSearch, light }: Props) {
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearch(event.currentTarget.word.value);
  };

  return (
    <form
      className={`w-full h-12 max-w-[327px] flex px-6  items-center rounded-[16px] md:max-w-[690px] md:h-16 lg:max-w-[736px]  ${
        light ? "bg-[#F4F4F4]" : "bg-[#1F1F1F]"
      }`}
      onSubmit={submitHandler}
    >
      <input
        id="word"
        type="text"
        className={`w-full h-full outline-0 text-4 leading-[19px] font-bold md:text-5 md:leading-[26px]  ${
          light ? "bg-[#F4F4F4] text-[#2D2D2D]" : "bg-[#1F1F1F] text-[#FFFFFF]"
        }`}
      />
      <button type="submit">
        <img src={searchIcon} alt="Search Icon" className="w-4 h-4" />
      </button>
    </form>
  );
}
