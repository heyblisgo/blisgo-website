import { NextComponentType } from "next";
import React from "react";

export const FirstStack = () => {
  return (
    <div className="pt-[2.125rem] pb-[6.875rem] gap-[189px] flex justify-center items-center h-[557px] bg-stackgrey-1">
      <div className="w-[28.5rem] h-[11.25rem] flex flex-col justify-center gap-[26px]">
        <span className="text-[50px] font-bold leading-[3.75rem]">
          분리배출이 더 쉬워지는 블리수고,
          <br /> APP으로 만나보세요
        </span>
        <span className="text-[24px] leading-[28px] font-medium text-[#545454]">친환경 생활, 잘 버리는 일부터 시작해볼까요?</span>
        <div className="flex gap-[25px] text-[24px] leading-[28px] font-medium">
          <button className="w-[14.5rem] h-[55px] bg-stackgrey-2 rounded-2xl">플레이스토어 CTA</button>
          <button className="w-[14.5rem] h-[55px] bg-stackgrey-2 rounded-2xl">앱스토어 CTA</button>
        </div>
      </div>
      <div className="bg-stackgrey-2 w-[413px] h-[413px] rounded-full"></div>
    </div>
  );
};

interface StackProps {
  mainText?: string;
  subText?: string;
  image?: HTMLImageElement;
}

export const LeftStack: React.FC<React.PropsWithChildren<StackProps>> = ({ mainText, subText, image }) => {
  return (
    <div className="pt-[7.5rem] pb-[6.875rem] gap-[156px] flex justify-center items-center h-[680px]">
      <div className="bg-stackgrey-2 w-[413px] h-[413px] rounded-full"></div>
      {/* <div className="bg-[image] w-[413px] h-[413px] rounded-full"></div> */}
      <div className="w-[28.5rem] h-[11.25rem] flex flex-col justify-center gap-[30px]">
        <span className="text-[50px] font-bold leading-[3.75rem] whitespace-pre-line">{mainText}</span>
        <span className="text-[24px] leading-[28px] font-medium text-[#545454] whitespace-pre-line">{subText}</span>
      </div>
    </div>
  );
};

export const RightStack: React.FC<React.PropsWithChildren<StackProps>> = ({ mainText, subText, image }) => {
  return (
    <div className="pt-[7.5rem] pb-[6.875rem] gap-[131px] flex justify-center items-center h-[680px] bg-stackgrey-1">
      <div className="flex flex-col justify-center gap-[30px]">
        <span className="text-[50px] font-bold leading-[3.75rem] whitespace-pre-line">{mainText}</span>
        <span className="text-[24px] leading-[28px] font-medium text-[#545454] whitespace-pre-line">{subText}</span>
      </div>
      <div className="bg-stackgrey-2 w-[413px] h-[413px] rounded-full"></div>
      {/* <div className="bg-[image] w-[413px] h-[413px] rounded-full"></div> */}
    </div>
  );
};

export const LastStack = () => {
  return (
    <div className="pt-[101px] gap-[40px] flex flex-col justify-space-between items-center h-[511px] bg-stackgrey-1">
      <span className="text-[50px] font-bold leading-[3.75rem] whitespace-pre-line text-center">
        지금 바로 손 안에서
        <br />
        친환경 생활을 위한 가이드를
        <br />
        만나보세요
      </span>
      <div className="flex gap-[25px] text-[24px] leading-[28px] font-medium">
        <button className="w-[14.5rem] h-[55px] bg-stackgrey-2 rounded-2xl">플레이스토어 CTA</button>
        <button className="w-[14.5rem] h-[55px] bg-stackgrey-2 rounded-2xl">앱스토어 CTA</button>
      </div>
    </div>
  );
};
