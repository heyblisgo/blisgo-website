import Image from "next/image";

const Header = () => {
  return (
    <>
      <nav className="px-4 md:p-6 flex items-center justify-between gap-8">
        <div className="relative flex items-center shrink-0 w-[76.96px] h-[40px] md:w-[7.25rem] md:h-[3.75rem]">
          <Image className="absolute" src="/assets/main-logo.svg" alt="main logo" objectFit="contain" layout="fill"></Image>
        </div>
        <div className="hidden md:flex w-full max-w-[37.25rem] border-yellow-green border rounded-lg h-12 gap-2 items-center pl-4">
          <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.262 6.66671C11.262 8.87585 9.47118 10.6667 7.26204 10.6667C5.05291 10.6667 3.26204 8.87585 3.26204 6.66671C3.26204 4.45757 5.05291 2.66671 7.26204 2.66671C9.47118 2.66671 11.262 4.45757 11.262 6.66671ZM10.3076 11.0456C9.44408 11.6472 8.39427 12 7.26204 12C4.31653 12 1.92871 9.61223 1.92871 6.66671C1.92871 3.72119 4.31653 1.33337 7.26204 1.33337C10.2076 1.33337 12.5954 3.72119 12.5954 6.66671C12.5954 7.99891 12.1069 9.21702 11.2994 10.1517L14.8715 13.7239L13.9287 14.6667L10.3076 11.0456Z"
              fill="#999999"
            />
          </svg>

          <input
            placeholder="분리배출 품목을 검색해보세요."
            type="text"
            className="w-full outline-none caret-yellow-green font-normal text-body1 text-grey-2"
          />
        </div>
        <div className="hidden md:flex items-center shrink-0">
          <ul className="flex gap-6 text-center text-darkgrey-2 text-title3 font-bold">
            <li>
              <a href="https://blisgo.com/community/">큐레이션</a>
            </li>
            <li>
              <a href="https://blisgo.com/community/">커뮤니티</a>
            </li>
            <li>
              <a href="https://blisgo.com/community/">마이페이지</a>
            </li>
          </ul>
        </div>
        <button className="md:hidden">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16 10C16 13.3137 13.3137 16 10 16C6.68629 16 4 13.3137 4 10C4 6.68629 6.68629 4 10 4C13.3137 4 16 6.68629 16 10ZM14.5683 16.5683C13.2731 17.4708 11.6983 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 11.9983 17.2673 13.8255 16.056 15.2275L21.4142 20.5858L20 22L14.5683 16.5683Z"
              fill="#242424"
            />
          </svg>
        </button>
      </nav>
    </>
  );
};

export default Header;
