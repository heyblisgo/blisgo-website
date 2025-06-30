"use client";
import Image from "next/image";

export default function Page() {
  return (
    <main className="p-6 md:gap-3 flex flex-col-reverse justify-center xl:flex-row xl:justify-end items-center w-full max-full bg-primary-beige relative md:px-20 xl:static xl:max-w-[1280px] xl:mx-auto xl:px-20">
      <div className="shadow-[0px_0px_20px_20px_#EEEEDD] md:shadow-none min-h-[20px] bg-primary-beige md:bg-transparent mt-64 mb-12 md:mt-0 md:mb-0 flex-1 flex flex-col justify-end gap-4 md:absolute xl:static md:left-20 z-10 ">
        <span className="mt-9 md:mt-0 text-center md:text-start text-4xl font-extrabold leading-10 text-darkgrey-3 break-keep">
          분리배출이 더 쉬워지는 블리스고,
          <br /> APP으로 만나보세요
        </span>
        <span className="text-center md:text-start text-base leading-6 font-normal text-darkgrey-3 break-keep">
          친환경 생활, 잘 버리는 일부터 시작해볼까요?
        </span>
        <div className="w-full justify-center md:justify-start flex gap-2 mt-4 text-[24px] leading-[28px] font-medium">
          <button className="w-[113.75px] h-8 relative">
            <Image className="absolute object-cotain" src="/assets/about/ios-download.svg" alt="ios btn" fill />
          </button>
          <button className="w-[113.75px] h-8 relative">
            <Image className="absolute object-cotain" src="/assets/about/google-download.svg" alt="google btn" fill />
          </button>
        </div>
      </div>

      <div className="top-8 md:top-0 md:ml-auto md:mr-0 w-[310px] h-[383px] md:max-w-[576.31px] md:min-w-[576.31px] md:min-h-[710.88px] absolute md:relative md:mt-8 flex-1">
        <Image className="absolute object-cotain" src="/assets/about/about-phone.png" alt="phone img" fill />
      </div>
    </main>
  );
}
