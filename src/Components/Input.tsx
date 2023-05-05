import searchIcon from "../assets/images/icon-search.svg";

interface Props {
  search: string;
  setSearch: (search: string) => void;
  light: boolean;
}

export default function Input({ search, setSearch, light }: Props) {
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearch(event.currentTarget.word.value);
  };

  return (
    <div className={`w-full max-w-[327px] md:max-w-[690px] lg:max-w-[736px]`}>
      <form
        className={`relative w-full h-12 flex items-center rounded-[16px] md:h-16 ${
          light ? "bg-[#F4F4F4]" : "bg-[#1F1F1F]"
        } `}
        onSubmit={submitHandler}
      >
        <input
          id="word"
          type="text"
          className={`w-full h-full outline-0 px-6 text-4 rounded-[16px] leading-[19px] font-bold md:text-5 md:leading-[26px]  ${
            light
              ? "bg-[#F4F4F4] text-[#2D2D2D]"
              : "bg-[#1F1F1F] text-[#FFFFFF]"
          } ${search === "" ? "outline-1 outline-[red]" : "outline-none"}`}
        />
        <button type="submit">
          <img
            src={searchIcon}
            alt="Search Icon"
            className="w-4 h-4 absolute top-1/3 right-5"
          />
        </button>
      </form>
      <p
        className={`text-[#FF5252] text-5 leading-6 font-normal mt-2 ${
          search === "" ? "block" : "hidden"
        }`}
      >
        Whoops, can’t be empty…
      </p>
    </div>
  );
}
