"use client";
import Image from "next/image";
import { useState } from "react";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import KakaoShareButton, { ShareDataProps } from "./kakaoShareButton";

export const ShareButtonMB = () => {
  return (
    <div className="dropdown dropdown-bottom dropdown-end">
      <label
        tabIndex={0}
        className="text-label2 text-darkgrey-3 items-center justify-between bg-lightgrey-2 rounded-3xl p-2 gap-1 flex cursor-pointer md:hidden"
      >
        <Image src="/assets/sns/share.svg" alt="share icon" width={16} height={16} />
      </label>
      <ul tabIndex={0} className="dropdown-content menu py-8 px-6 bg-base-100 shadow-dropdown rounded-lg w-[264px] flex-row justify-between">
        {/* todo : update href */}
        <h2 className="text-title2 font-bold self-stretch w-full pb-4">공유하기?</h2>
        {[
          { name: "카카오톡", icon: "kakao", href: "#" },
          { name: "페이스북", icon: "facebook", href: "#" },
          { name: "트위터", icon: "twitter", href: "#" },
          {
            name: "링크복사",
            icon: "link",
            href: "#",
            onClick: () => console.log(window.location.href),
          },
        ].map((item) => (
          <li className="h-fit w-fit" key={`share-${item.icon}`} onClick={() => console.log(window.location.href)}>
            <a className="flex flex-col gap-1 p-1 text-label2 font-normal" href={item.href}>
              <Image src={`/assets/sns/${item.icon}.svg`} alt={`${item.icon} icon`} width={40} height={40} />
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const ShareButtonPC = ({ item, shareData }: { item?: string; shareData: ShareDataProps }) => {
  const [isToast, setIsToast] = useState(false);

  const copyURL = async () => {
    const currentUrl = decodeURI(window.document.location.href);
    try {
      await navigator.clipboard.writeText(currentUrl);
      setIsToast(true);
      setTimeout(() => {
        setIsToast(false);
      }, 3000);
    } catch (e) {
      console.log("e", e);
    }
  };

  return (
    <div className="dropdown dropdown-bottom dropdown-end">
      <label tabIndex={0} className="text-label2 text-darkgrey-3 items-center justify-between bg-lightgrey-2 rounded-3xl p-2 gap-1 flex cursor-pointer">
        <Image src="/assets/sns/share.svg" alt="share icon" width={16} height={16} />
        공유하기
      </label>
      <ul tabIndex={0} className="dropdown-content menu py-8 px-6 bg-base-100 shadow-dropdown rounded-lg w-[264px] flex-row justify-between">
        <h2 className="text-title2 font-bold self-stretch w-full pb-4">공유하기</h2>

        <li className="h-fit w-fit hover:bg-lightgrey-1 rounded-md" key={`share-kakao`}>
          <KakaoShareButton shareData={shareData} />
        </li>

        <li className="h-fit w-fit hover:bg-lightgrey-2 rounded-md" key={`share-facebook`}>
          <FacebookShareButton url={window.document.location.href} hashtag={`${item}_분리수거`}>
            <div className=" flex flex-col gap-1 p-1 text-label2 font-normal">
              <Image src={`/assets/sns/facebook.svg`} alt={`facebook icon`} width={40} height={40} />
              {"페이스북"}
            </div>
          </FacebookShareButton>
        </li>
        <li className="h-fit w-fit hover:bg-lightgrey-2 rounded-md" key={`share-facebook`}>
          <TwitterShareButton url={window.document.location.href} hashtags={[`${item}_분리수거`, `${item}_버리는법`]}>
            <div className=" flex flex-col gap-1 p-1 text-label2 font-normal">
              <Image src={`/assets/sns/twitter.svg`} alt={`twitter icon`} width={40} height={40} />
              {"트위터"}
            </div>
          </TwitterShareButton>
        </li>
        <li className="h-fit w-fit" key={"copy-link"} onClick={copyURL}>
          <div className="flex flex-col gap-1 p-1 text-label2 font-normal">
            <Image src={`/assets/sns/link.svg`} alt={`copy-link-icon`} width={40} height={40} />
            {"링크복사"}
          </div>
        </li>
      </ul>
      {isToast && (
        <div className="toast toast-center z-[100] w-full">
          <div className="w-4/6 max-w-[36rem] m-auto h-[3.5rem] px-6 py-4 flex justify-start items-center gap-3 bg-darkgrey-3 rounded-lg">
            <div className="text-white text-sm">
              <span>링크가 복사되었습니다.</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
