"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export interface ShareDataProps {
  title: string;
  description: string;
  imageUrl: string;
}

const KakaoShareButton = ({ shareData }: { shareData: ShareDataProps }) => {
  const shareURL = typeof window !== "undefined" ? window.document.location.href : import.meta.url;
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://t1.kakaocdn.net/kakao_js_sdk/2.7.5/kakao.min.js";
    script.integrity = "sha384-dok87au0gKqJdxs7msEdBPNnKSRT+/mhTVzq+qOhcL464zXwvcrpjeWvyj1kCdq6";
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);
    script.onload = () => {
      window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_APP_KEY);
    };
  }, [container]);

  const kakaoShareData = () => {
    const { Kakao } = window;
    console.log(shareURL);
    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: `${shareData.title} 버리는 법`,
        description: shareData.description,
        imageUrl: shareData.imageUrl,
        link: {
          mobileWebUrl: shareURL,
          webUrl: shareURL,
        },
      },
      buttons: [
        {
          title: "버리는 법 확인하기",
          link: {
            mobileWebUrl: shareURL,
            webUrl: shareURL,
          },
        },
      ],
    });
  };

  return (
    <div className="flex flex-col gap-1 p-1 text-label2 font-normal" ref={container} onClick={kakaoShareData}>
      <Image src={`/assets/sns/kakao.svg`} alt={`kakaoTalk share icon`} width={40} height={40} />
      {"카카오톡"}
    </div>
  );
};

export default KakaoShareButton;
