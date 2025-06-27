"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { fetchAPI } from "@/lib/api";
import useComponentVisible from "@/hooks/useComponentVisible";
import { usePathname, useRouter } from "next/navigation";

const Header = () => {
  const [recommand, setRecommand] = useState<any>(undefined);
  const getRecommandList = async () => {
    const popularTrashRes = await fetch("https://blisgo-app-default-rtdb.firebaseio.com/popularTrash.json");
    const popularTrashData = await popularTrashRes.json();
    setRecommand(popularTrashData);
  };

  const [searchText, setSearchText] = useState<undefined | string>(undefined);
  const [searchResult, setSearchResult] = useState([]);
  const [noResult, setNoResult] = useState(false);

  useEffect(() => {
    getRecommandList();
  }, []);

  const makeSearchRequest = async (e: any) => {
    const text = e.target.value;
    setSearchText(text);
    if (text.length > 0) {
      const formattedQuery = text.toLowerCase().split(" ").join("");
      const { data: apiresult } = await fetchAPI(
        `/trash-wikis?fields[0]=name&fields[1]=tags&populate[media][fields][0]=url&populate[seo][fields][1]=canonicalURL&pagination[pageSize]=1000&filters[tags][$contains]=${formattedQuery}`,
      );
      if (apiresult.length === 0) {
        setNoResult(true);
        setSearchResult([]);
      } else {
        setNoResult(false);
        setSearchResult(apiresult);
      }
    } else {
      setNoResult(false);
      setSearchResult([]);
    }
  };

  const makeSearchReset = () => {
    console.log("리셋해줘...");
    setSearchText("");
    setSearchResult([]);
    setNoResult(false);
  };

  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(true);
  const pathname = usePathname();

  useEffect(() => {
    setIsComponentVisible(false);
  }, [pathname]);

  // 검색 인기품목 선택시 이동
  const router = useRouter();
  const navigateRecommandItem = async (itemName: string) => {
    const { data: apiResult } = await fetchAPI(
      `/trash-wikis?fields[0]=name&fields[1]=tags&populate[media][fields][0]=url&populate[seo][fields][1]=canonicalURL&pagination[pageSize]=1000&filters[tags][$contains]=${itemName}`,
    );
    if (apiResult.length) {
      const result = apiResult[0];
      makeSearchReset();
      router.push(`${result.attributes.seo[0].canonicalURL.replace("https://blisgo.com/", "")}?id=${result.id}`);
    }
  };

  const [isMobileSearch, setIsMobileSearch] = useState(false);

  const mobileSearchHandler = () => {
    setIsMobileSearch(true);
  };

  return (
    <>
      <nav className="xl:mx-auto xl:w-[1280px] px-4 md:p-6 flex items-center justify-between gap-8">
        <Link href="/" className="relative flex items-center shrink-0 w-[76.96px] h-[40px] md:w-[7.25rem] md:h-[3.75rem]">
          <Image className="absolute object-contain" src="/assets/main-logo.svg" alt="main logo" fill />
        </Link>
        <div ref={ref} className="hidden md:block">
          <div
            className="group hidden md:flex w-full max-w-[37.25rem] bg-white border-yellow-green border rounded-lg h-auto items-center px-4 focus-within:border-primary-green flex-col divide-y divide-grey-1 absolute top-[30px] left-1/2 -translate-x-1/2 z-10 focus:border-primary-green"
            onClick={() => setIsComponentVisible(true)}
          >
            <div className="flex flex-row w-full min-h-12 items-center gap-2">
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-grey-2 -color group-focus-within:fill-darkgrey-2"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.262 6.66671C11.262 8.87585 9.47118 10.6667 7.26204 10.6667C5.05291 10.6667 3.26204 8.87585 3.26204 6.66671C3.26204 4.45757 5.05291 2.66671 7.26204 2.66671C9.47118 2.66671 11.262 4.45757 11.262 6.66671ZM10.3076 11.0456C9.44408 11.6472 8.39427 12 7.26204 12C4.31653 12 1.92871 9.61223 1.92871 6.66671C1.92871 3.72119 4.31653 1.33337 7.26204 1.33337C10.2076 1.33337 12.5954 3.72119 12.5954 6.66671C12.5954 7.99891 12.1069 9.21702 11.2994 10.1517L14.8715 13.7239L13.9287 14.6667L10.3076 11.0456Z"
                />
              </svg>

              <input
                placeholder="분리배출 품목을 검색해보세요."
                type="text"
                className="w-full outline-none caret-yellow-green font-normal text-body1 text-grey-2 focus:caret-darkgrey-2 focus:text-darkgrey-2"
                value={searchText}
                onChange={makeSearchRequest}
              />
            </div>
            {isComponentVisible && (
              <>
                {searchResult.length > 0 && (
                  <div className="w-full py-3 z-50">
                    {searchResult?.slice(0, 10).map((data: any) => {
                      return (
                        <React.Fragment key={data.id}>
                          <Link href={`${data.attributes.seo[0].canonicalURL.replace("https://blisgo.com/", "")}?id=${data.id}`}>
                            <div className="w-full flex items-center gap-2 px-2 hover:bg-lightgrey-2 text-darkgrey-2">
                              <svg
                                width="17"
                                height="16"
                                viewBox="0 0 17 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="fill-grey-2 -color group-focus-within:fill-grey-2"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M11.262 6.66671C11.262 8.87585 9.47118 10.6667 7.26204 10.6667C5.05291 10.6667 3.26204 8.87585 3.26204 6.66671C3.26204 4.45757 5.05291 2.66671 7.26204 2.66671C9.47118 2.66671 11.262 4.45757 11.262 6.66671ZM10.3076 11.0456C9.44408 11.6472 8.39427 12 7.26204 12C4.31653 12 1.92871 9.61223 1.92871 6.66671C1.92871 3.72119 4.31653 1.33337 7.26204 1.33337C10.2076 1.33337 12.5954 3.72119 12.5954 6.66671C12.5954 7.99891 12.1069 9.21702 11.2994 10.1517L14.8715 13.7239L13.9287 14.6667L10.3076 11.0456Z"
                                />
                              </svg>
                              <span>{data.attributes.name}</span>
                            </div>
                          </Link>
                        </React.Fragment>
                      );
                    })}
                  </div>
                )}
                {noResult && (
                  <div className="w-full py-3 flex flex-col gap-6">
                    <div className="w-full flex flex-col items-center justify-center gap-2">
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M20 35.75C28.6985 35.75 35.75 28.6985 35.75 20C35.75 11.3015 28.6985 4.25 20 4.25C11.3015 4.25 4.25 11.3015 4.25 20C4.25 28.6985 11.3015 35.75 20 35.75ZM20 38C29.9411 38 38 29.9411 38 20C38 10.0589 29.9411 2 20 2C10.0589 2 2 10.0589 2 20C2 29.9411 10.0589 38 20 38Z"
                          fill="#777777"
                        />
                        <path
                          d="M20 25.625C19.3787 25.625 18.875 26.1287 18.875 26.75C18.875 27.3713 19.3787 27.875 20 27.875C20.6213 27.875 21.125 27.3713 21.125 26.75C21.125 26.1287 20.6213 25.625 20 25.625Z"
                          fill="#777777"
                        />
                        <path
                          d="M18.875 22.25C18.875 22.8713 19.3787 23.375 20 23.375C20.6213 23.375 21.125 22.8713 21.125 22.25V13.25C21.125 12.6287 20.6213 12.125 20 12.125C19.3787 12.125 18.875 12.6287 18.875 13.25V22.25Z"
                          fill="#777777"
                        />
                      </svg>
                      <p className="text-body2 text-darkgrey-2 mt-2">검색 결과가 없습니다.</p>
                      <p className="text-body3 text-darkgrey-2">
                        &#183; 검색어의 철자가 정확한지 확인해주세요.
                        <br />
                        &#183; 검색어의 상위 카테고리로 검색해보세요.
                        <br />
                        &nbsp; <span className="text-grey-2">&#39;냉장고&#39;, &#39;신발&#39;</span>
                      </p>
                    </div>
                    <div className="w-full bg-lightgrey-2 rounded-lg p-4 flex flex-col gap-2 text-body3 text-darkgrey-2">
                      <p>검색 인기 품목</p>
                      <div className="flex gap-2 ">
                        {recommand?.slice(0, 6).map((data: string) => {
                          return (
                            <React.Fragment key={data}>
                              <div
                                className="w-fit px-2 py-1 shadow-innerLine shadow-darkgrey-2 rounded cursor-pointer"
                                onClick={() => navigateRecommandItem(data)}
                              >
                                <span>&#35;{data}</span>
                              </div>
                            </React.Fragment>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
        <div className="hidden md:flex items-center shrink-0">
          <ul className="flex gap-6 text-center text-darkgrey-2 text-title3 font-bold">
            <li>
              <Link href="https://blisgo.com/community/" target="_blank" rel="noopener noreferrer">
                큐레이션
              </Link>
            </li>
            <li>
              <Link href="https://blisgo.com/community/" target="_blank" rel="noopener noreferrer">
                커뮤니티
              </Link>
            </li>
            <li>
              <Link href="https://blisgo.com/community/" target="_blank" rel="noopener noreferrer">
                마이페이지
              </Link>
            </li>
          </ul>
        </div>
        {isMobileSearch ? (
          <div ref={ref} className="block md:hidden h-[74px]">
            <div
              className="group flex md:hidden w-2/3 max-w-2/3 bg-white border-yellow-green border rounded-lg h-auto items-center px-4 focus-within:border-primary-green flex-col divide-y divide-grey-1 absolute top-4 right-4 z-10 focus:border-primary-green"
              onClick={() => setIsComponentVisible(true)}
            >
              <div className="flex flex-row w-full min-h-[2.5rem] items-center gap-2 py-1">
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-grey-2 -color group-focus-within:fill-darkgrey-2"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.262 6.66671C11.262 8.87585 9.47118 10.6667 7.26204 10.6667C5.05291 10.6667 3.26204 8.87585 3.26204 6.66671C3.26204 4.45757 5.05291 2.66671 7.26204 2.66671C9.47118 2.66671 11.262 4.45757 11.262 6.66671ZM10.3076 11.0456C9.44408 11.6472 8.39427 12 7.26204 12C4.31653 12 1.92871 9.61223 1.92871 6.66671C1.92871 3.72119 4.31653 1.33337 7.26204 1.33337C10.2076 1.33337 12.5954 3.72119 12.5954 6.66671C12.5954 7.99891 12.1069 9.21702 11.2994 10.1517L14.8715 13.7239L13.9287 14.6667L10.3076 11.0456Z"
                  />
                </svg>

                <input
                  placeholder="분리배출 품목을 검색해보세요"
                  type="text"
                  className="w-full outline-none caret-yellow-green font-normal text-body1 text-grey-2 focus:caret-darkgrey-2 focus:text-darkgrey-2"
                  value={searchText}
                  onChange={makeSearchRequest}
                />
              </div>
              {isComponentVisible && (
                <>
                  {searchResult.length > 0 && (
                    <div className="w-full py-3 z-50">
                      {searchResult?.slice(0, 5).map((data: any) => {
                        return (
                          <React.Fragment key={data.id}>
                            <Link href={`${data.attributes.seo[0].canonicalURL.replace("https://blisgo.com/", "")}?id=${data.id}`}>
                              <div className="w-full flex items-center gap-2 px-2 hover:bg-lightgrey-2 text-darkgrey-2">
                                <svg
                                  width="17"
                                  height="16"
                                  viewBox="0 0 17 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="fill-grey-2 -color group-focus-within:fill-grey-2"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M11.262 6.66671C11.262 8.87585 9.47118 10.6667 7.26204 10.6667C5.05291 10.6667 3.26204 8.87585 3.26204 6.66671C3.26204 4.45757 5.05291 2.66671 7.26204 2.66671C9.47118 2.66671 11.262 4.45757 11.262 6.66671ZM10.3076 11.0456C9.44408 11.6472 8.39427 12 7.26204 12C4.31653 12 1.92871 9.61223 1.92871 6.66671C1.92871 3.72119 4.31653 1.33337 7.26204 1.33337C10.2076 1.33337 12.5954 3.72119 12.5954 6.66671C12.5954 7.99891 12.1069 9.21702 11.2994 10.1517L14.8715 13.7239L13.9287 14.6667L10.3076 11.0456Z"
                                  />
                                </svg>
                                <span className="text-lg">{data.attributes.name}</span>
                              </div>
                            </Link>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  )}
                  {noResult && (
                    <div className="w-full py-3 flex flex-col gap-6">
                      <div className="w-full flex flex-col items-center justify-center gap-2">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M20 35.75C28.6985 35.75 35.75 28.6985 35.75 20C35.75 11.3015 28.6985 4.25 20 4.25C11.3015 4.25 4.25 11.3015 4.25 20C4.25 28.6985 11.3015 35.75 20 35.75ZM20 38C29.9411 38 38 29.9411 38 20C38 10.0589 29.9411 2 20 2C10.0589 2 2 10.0589 2 20C2 29.9411 10.0589 38 20 38Z"
                            fill="#777777"
                          />
                          <path
                            d="M20 25.625C19.3787 25.625 18.875 26.1287 18.875 26.75C18.875 27.3713 19.3787 27.875 20 27.875C20.6213 27.875 21.125 27.3713 21.125 26.75C21.125 26.1287 20.6213 25.625 20 25.625Z"
                            fill="#777777"
                          />
                          <path
                            d="M18.875 22.25C18.875 22.8713 19.3787 23.375 20 23.375C20.6213 23.375 21.125 22.8713 21.125 22.25V13.25C21.125 12.6287 20.6213 12.125 20 12.125C19.3787 12.125 18.875 12.6287 18.875 13.25V22.25Z"
                            fill="#777777"
                          />
                        </svg>
                        <p className="text-body2 text-darkgrey-2 mt-2">검색 결과가 없습니다.</p>
                        <p className="text-body3 text-darkgrey-2">
                          &#183; 검색어의 철자가 정확한지 확인해주세요.
                          <br />
                          &#183; 검색어의 상위 카테고리로 검색해보세요.
                          <br />
                          &nbsp; <span className="text-grey-2">&#39;냉장고&#39;, &#39;신발&#39;</span>
                        </p>
                      </div>
                      <div className="w-full bg-lightgrey-2 rounded-lg p-4 flex flex-col gap-2 text-body3 text-darkgrey-2">
                        <p>검색 인기 품목</p>
                        <div className="flex gap-2 ">
                          {recommand?.slice(0, 3).map((data: string) => {
                            return (
                              <React.Fragment key={data}>
                                <div
                                  className="w-fit px-2 py-1 shadow-innerLine shadow-darkgrey-2 rounded cursor-pointer"
                                  onClick={() => navigateRecommandItem(data)}
                                >
                                  <span>&#35;{data}</span>
                                </div>
                              </React.Fragment>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        ) : (
          <button className="md:hidden py-[18px]" onClick={mobileSearchHandler}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16 10C16 13.3137 13.3137 16 10 16C6.68629 16 4 13.3137 4 10C4 6.68629 6.68629 4 10 4C13.3137 4 16 6.68629 16 10ZM14.5683 16.5683C13.2731 17.4708 11.6983 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 11.9983 17.2673 13.8255 16.056 15.2275L21.4142 20.5858L20 22L14.5683 16.5683Z"
                fill="#242424"
              />
            </svg>
          </button>
        )}
      </nav>
    </>
  );
};

export default Header;
