"use client";
import Image from "next/image";

export default function Page() {
  return (
    <main className="gap-[205px] flex items-center h-full bg-primary-beige">
      <div className="w-[291px] ml-[104px] flex flex-col justify-center gap-4">
        <span className="text-[32px] font-extrabold leading-10 text-darkgrey-1">
          분리배출이 더 쉬워지는 블리스고,
          <br /> APP으로 만나보세요
        </span>
        <span className="text-base leading-6 font-normal text-darkgrey-1">친환경 생활, 잘 버리는 일부터 시작해볼까요?</span>
        <div className="flex gap-2 mt-4 text-[24px] leading-[28px] font-medium">
          <button className="w-[113.75px] h-8 relative">
            <Image className="absolute object-cotain" src="/assets/about/ios-download.svg" alt="ios btn" fill />
          </button>
          <button className="w-[113.75px] h-8 relative">
            <Image className="absolute object-cotain" src="/assets/about/google-download.svg" alt="google btn" fill />
          </button>
        </div>
      </div>
      <div className="w-[576.31px] h-[710.88px] relative mt-8">
        <Image className="absolute object-cotain" src="/assets/about/about-phone.png" alt="phone img" fill />
      </div>
    </main>
  );
}
