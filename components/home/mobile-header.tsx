import Link from "next/link";

const MobileHeader = () => {
  return (
    <>
      <div className="border-t border-grey-1 z-30 bg-white fixed bottom-0 h-14 w-full flex justify-around p-2">
        <button className="flex flex-col items-center">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13 12.3003V11.3003H12H10H9V12.3003V20.5L1.92285 20.5V9.47504C1.92285 9.40017 1.95517 9.32894 2.01152 9.27963L1.35302 8.52705L2.01152 9.27963L10.8291 1.56424C10.927 1.47859 11.0732 1.47859 11.1711 1.56424L11.8081 0.836171L11.1711 1.56424L19.9887 9.27963C20.045 9.32894 20.0773 9.40016 20.0773 9.47504V20.5L13 20.5V12.3003Z"
              fill="#007630"
              stroke="#007630"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <Link className="pt-1 text-label3 text-primary-green" href="/">
            홈
          </Link>
        </button>
        <button className="flex flex-col items-center">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12.5649 7.32971V8.32971H13.5649H15.4208C17.9547 8.32971 20.0089 10.3839 20.0089 12.9178V15.912C20.0089 18.4459 17.9547 20.5 15.4208 20.5H7.29688V4.13401C7.29688 2.67929 8.47616 1.5 9.93088 1.5C11.3856 1.5 12.5649 2.67929 12.5649 4.13401V7.32971Z"
              stroke="#777777"
              strokeWidth="2"
            />
            <path d="M1.99023 20.5V8.6582H7.27707V20.5H1.99023Z" stroke="#777777" strokeWidth="2" />
          </svg>
          <Link className="pt-1 text-label3 text-darkgrey-3" target="_blank" rel="noopener noreferrer" href="https://blisgo.com/community/">
            큐레이션
          </Link>
        </button>
        <button className="flex flex-col items-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M6 7.56836H18V9.56836H6V7.56836ZM6 11.4536H13.9291V13.4536H6V11.4536Z" fill="#999999" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.9216 18.6688C13.301 18.2433 13.8441 18 14.4142 18H20V5H4V18H9.58579C10.1559 18 10.699 18.2433 11.0784 18.6688L12 19.7022L12.9216 18.6688ZM12 22.7071L9.58579 20H4C2.89543 20 2 19.1046 2 18V5C2 3.89543 2.89543 3 4 3H20C21.1046 3 22 3.89543 22 5V18C22 19.1046 21.1046 20 20 20H14.4142L12 22.7071Z"
              fill="#999999"
            />
          </svg>
          <Link className="pt-1 text-label3 text-darkgrey-3" target="_blank" rel="noopener noreferrer" href="https://blisgo.com/community/">
            커뮤니티
          </Link>
        </button>
      </div>
    </>
  );
};

export default MobileHeader;
