import type { NextPage } from "next";

const WikiPage: NextPage = () => {
  return (
    <>
      <main className="xl:mx-[120px] md:mx-auto md:px-6 md:py-4 flex flex-col gap-y-12 bg-lightgrey-1 md:bg-inherit">
        <section className="justify-center grid grid-cols-1 md:grid-cols-2 gap-x-4 w-full md:max-w-[992px] md:mx-auto">
          {/* image */}
          <div className="bg-slate-100 aspect-square md:rounded-2xl relative">
            <div className="absolute flex justify-between bottom-0 items-center w-full px-5 pb-5">
              <button className="flex gap-[6px] justify-center items-center bg-white bg-opacity-90 shadow-md rounded-lg p-2">
                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M19.4694 13.2083C18.9945 13.0612 18.5046 13.2053 18.2278 13.6737C18.2278 13.6737 17.2563 15.3549 17.0467 15.7247L4.87797 15.7163L5.52943 16.2813C6.61439 17.2222 8.68345 19.0156 9.17459 19.4377C9.38751 19.6262 9.66367 19.7274 9.94794 19.7211C10.1115 19.7163 10.2714 19.6711 10.4133 19.5896C11.0209 19.239 11.1152 18.3816 10.5934 17.9175C10.5387 17.8733 10.4809 17.8332 10.4205 17.7974L18.25 17.801L19.8711 14.9862C19.9834 14.7905 20.1113 14.6019 20.1473 14.366C20.2272 13.861 19.9558 13.3591 19.4694 13.2083Z"
                    fill="black"
                  />
                  <path
                    d="M3.5355 17.5838C3.89996 17.2458 4.01944 16.7493 3.75165 16.2755C3.75165 16.2755 2.77957 14.5943 2.56222 14.2293L8.63789 3.68528L7.82311 3.96808V3.96508C6.46676 4.43641 3.88015 5.33524 3.26952 5.55079C3.00009 5.64135 2.7746 5.82997 2.63787 6.07916C2.55971 6.22336 2.51845 6.38467 2.51779 6.54869C2.51779 7.25059 3.21488 7.75974 3.87594 7.54119C3.9426 7.51665 4.00725 7.48694 4.06928 7.45233L0.161133 14.2371L1.79128 17.0483C1.90536 17.2434 2.00383 17.4488 2.19116 17.5971C2.59164 17.9153 3.16204 17.9327 3.5355 17.5838Z"
                    fill="black"
                  />
                  <path
                    d="M8.18632 1.87748C8.29619 2.36202 8.66665 2.71447 9.21004 2.71807C9.21004 2.71807 11.1512 2.71807 11.5769 2.71387L17.6598 13.2555L17.8231 12.4083C18.0951 10.9979 18.6126 8.3092 18.7315 7.67275C18.7884 7.39405 18.738 7.10415 18.5904 6.86098C18.5041 6.72193 18.3849 6.60625 18.2434 6.52415C17.6352 6.1735 16.8462 6.52114 16.7039 7.20262C16.692 7.27248 16.6854 7.34312 16.6841 7.41397L12.7717 0.634605H9.52165C9.2959 0.634605 9.06894 0.618393 8.84618 0.706055C8.37185 0.894588 8.07344 1.38093 8.18632 1.87748Z"
                    fill="black"
                  />
                  <path d="M10.4111 6.42749V9.92749M10.4111 12.9275V13.0525" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

                <span className="md:text-label2 text-label3 text-darkgrey-2">대형 생활폐기물</span>
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.42076 5.38499C7.78274 5.35461 7.24774 5.71101 7.15174 6.28701C7.09121 6.65019 6.74772 6.89554 6.38454 6.83501C6.02136 6.77448 5.77601 6.43099 5.83654 6.06781C6.07388 4.64381 7.3722 4.00021 8.48418 4.05316C9.05379 4.08029 9.63918 4.28474 10.0899 4.70593C10.5519 5.13759 10.8275 5.75592 10.8275 6.51074C10.8275 7.37161 10.4887 8.01002 9.90561 8.39878C9.57476 8.61934 9.19775 8.73735 8.82747 8.79533V8.84408C8.82747 9.21227 8.529 9.51074 8.16081 9.51074C7.79262 9.51074 7.49414 9.21227 7.49414 8.84408V8.17741C7.49414 7.80922 7.79262 7.51074 8.16081 7.51074C8.60779 7.51074 8.95144 7.43242 9.16601 7.28938C9.33287 7.17813 9.49414 6.98321 9.49414 6.51074C9.49414 6.0989 9.35307 5.84223 9.1796 5.68014C8.99494 5.50758 8.72616 5.39953 8.42076 5.38499Z"
                    fill="#999999"
                  />
                  <path
                    d="M8.16081 10.1774C7.70057 10.1774 7.32747 10.5505 7.32747 11.0107C7.32747 11.471 7.70057 11.8441 8.16081 11.8441C8.62105 11.8441 8.99414 11.471 8.99414 11.0107C8.99414 10.5505 8.62105 10.1774 8.16081 10.1774Z"
                    fill="#999999"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.49414 8.17741C1.49414 4.49551 4.47891 1.51074 8.16081 1.51074C11.8427 1.51074 14.8275 4.49551 14.8275 8.17741C14.8275 11.8593 11.8427 14.8441 8.16081 14.8441C4.47891 14.8441 1.49414 11.8593 1.49414 8.17741ZM8.16081 2.84408C5.21529 2.84408 2.82747 5.23189 2.82747 8.17741C2.82747 11.1229 5.21529 13.5107 8.16081 13.5107C11.1063 13.5107 13.4941 11.1229 13.4941 8.17741C13.4941 5.23189 11.1063 2.84408 8.16081 2.84408Z"
                    fill="#999999"
                  />
                </svg>
              </button>
              {/* mobile share button */}
              <button className="md:hidden">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_d_1842_4666)">
                    <path
                      d="M12.7071 2.29289C12.3166 1.90237 11.6834 1.90237 11.2929 2.29289L8.29289 5.29289C7.90237 5.68342 7.90237 6.31658 8.29289 6.70711C8.68342 7.09763 9.31658 7.09763 9.70711 6.70711L11 5.41421V15C11 15.5523 11.4477 16 12 16C12.5523 16 13 15.5523 13 15V5.41421L14.2929 6.70711C14.6834 7.09763 15.3166 7.09763 15.7071 6.70711C16.0976 6.31658 16.0976 5.68342 15.7071 5.29289L12.7071 2.29289Z"
                      fill="white"
                    />
                    <path
                      d="M4.5 9C3.94772 9 3.5 9.44772 3.5 10V21C3.5 21.5523 3.94772 22 4.5 22H19.5C20.0523 22 20.5 21.5523 20.5 21V10C20.5 9.44772 20.0523 9 19.5 9H15V11H18.5V20H5.5V11H9V9H4.5Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <filter id="filter0_d_1842_4666" x="-0.5" y="-2" width="25" height="28" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1842_4666" />
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1842_4666" result="shape" />
                    </filter>
                  </defs>
                </svg>
              </button>
            </div>
          </div>
          {/* content */}
          <div className="flex flex-col gap-4 xl:pt-[22px] px-2 py-6">
            <div className="p-4 md:flex flex-col gap-8 hidden">
              <div className="flex justify-between items-center">
                <h1 className="text-display2 font-extrabold text-darkgrey-3">이불</h1>
                <button className="items-center justify-between bg-lightgrey-2 rounded-3xl p-2 gap-1 flex">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M8.47108 1.52864C8.21073 1.26829 7.78862 1.26829 7.52827 1.52864L5.52827 3.52864C5.26792 3.78899 5.26792 4.2111 5.52827 4.47145C5.78862 4.7318 6.21073 4.7318 6.47108 4.47145L7.33301 3.60952V10C7.33301 10.3682 7.63148 10.6667 7.99967 10.6667C8.36786 10.6667 8.66634 10.3682 8.66634 10V3.60952L9.52827 4.47145C9.78862 4.7318 10.2107 4.7318 10.4711 4.47145C10.7314 4.2111 10.7314 3.78899 10.4711 3.52864L8.47108 1.52864Z"
                      fill="#242424"
                    />
                    <path
                      d="M2.99967 6.00004C2.63148 6.00004 2.33301 6.29852 2.33301 6.66671V14C2.33301 14.3682 2.63148 14.6667 2.99967 14.6667H12.9997C13.3679 14.6667 13.6663 14.3682 13.6663 14V6.66671C13.6663 6.29852 13.3679 6.00004 12.9997 6.00004H9.99967V7.33337H12.333V13.3334H3.66634V7.33337H5.99967V6.00004H2.99967Z"
                      fill="#242424"
                    />
                  </svg>
                  <p className="text-label2 text-darkgrey-3">공유하기</p>
                </button>
              </div>
              <p className="text-title3 font-bold text-darkgrey-2">#천일염 #맛소금</p>
            </div>
            {/* collapse group */}
            <div className="flex flex-col gap-y-2">
              <article tabIndex={0} className="collapse collapse-arrow md:border md:border-base-300 bg-white rounded-lg">
                <input type="checkbox" className="peer" defaultChecked />
                <h2 className="collapse-title text-title1 font-semibold text-darkgrey-3">버리는 방법</h2>
                <p className="collapse-content text-body1 text-darkgrey-2">
                  홑이불, 담요, 누비이불 등 부피가 작은 침구류는 의류수거함에 넣거나 일반쓰레기(종량제봉투)로 버려요. 솜이불, 오리털이불, 베개 등 부피가 큰
                  침구류는 잘라서 일반쓰레기(종량제봉투)로 버리거나 대형 생활 폐기물로 신고 배출해주세요.
                </p>
              </article>

              <article tabIndex={0} className="collapse collapse-arrow md:border md:border-base-300 bg-white rounded-lg">
                <input type="checkbox" className="peer" />
                <h2 className="collapse-title text-title1 font-semibold text-darkgrey-3">알면 더 도움되는 팁</h2>
                <p className="collapse-content text-body1 text-darkgrey-2">내용</p>
              </article>

              <article tabIndex={0} className="collapse collapse-arrow md:border md:border-base-300 bg-white rounded-lg">
                <input type="checkbox" className="peer" />
                <h2 className="collapse-title text-title1 font-semibold text-darkgrey-3">자주 묻는 질문</h2>
                <p className="collapse-content text-body1 text-darkgrey-2">내용</p>
              </article>
            </div>
          </div>
        </section>
        {/* button */}
        <div className="flex flex-col gap-y-2 items-center mb-[88px]">
          <p className="text-darkgrey-2 text-label2">잘못된 정보가 있나요?</p>
          <button className="bg-primary-green rounded-lg w-20 h-12 flex justify-center items-center">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1.66699 4.16667C1.66699 3.24619 2.41318 2.5 3.33366 2.5H16.667C17.5875 2.5 18.3337 3.24619 18.3337 4.16667V14.1667C18.3337 15.0871 17.5875 15.8333 16.667 15.8333H12.8455L10.5896 18.0893C10.2641 18.4147 9.73651 18.4147 9.41107 18.0893L7.15515 15.8333H3.33366C2.41318 15.8333 1.66699 15.0871 1.66699 14.1667V4.16667ZM16.667 4.16667H3.33366V14.1667H7.50033C7.72134 14.1667 7.9333 14.2545 8.08958 14.4107L10.0003 16.3215L11.9111 14.4107C12.0674 14.2545 12.2793 14.1667 12.5003 14.1667H16.667V4.16667Z"
                fill="white"
              />
              <path
                d="M10.0003 10C9.54009 10 9.16699 9.6269 9.16699 9.16667V6.66667C9.16699 6.20643 9.54009 5.83333 10.0003 5.83333C10.4606 5.83333 10.8337 6.20643 10.8337 6.66667V9.16667C10.8337 9.6269 10.4606 10 10.0003 10Z"
                fill="white"
              />
              <path
                d="M8.95866 11.875C8.95866 11.2997 9.42503 10.8333 10.0003 10.8333C10.5756 10.8333 11.042 11.2997 11.042 11.875C11.042 12.4503 10.5756 12.9167 10.0003 12.9167C9.42503 12.9167 8.95866 12.4503 8.95866 11.875Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </main>
    </>
  );
};

export default WikiPage;
