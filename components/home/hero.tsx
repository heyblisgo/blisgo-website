import Link from "next/link";

export const Hero = () => {
  return (
    <Link href={`/about`}>
      <section className="xl:mx-auto xl:w-[1280px] mx-4 md:mx-6 relative rounded-lg  bg-[linear-gradient(242.94deg,#015F27_0%,#6BB89C_100%)] bg-white mt-4">
        <h1 className="font-bold md:font-extrabold text-white text-title1 md:text-display1 top-4 left-4 md:top-8 md:left-10 mb-1 md:mb-2 absolute z-[1]">
          분리배출이 더 쉬워지는 블리스고 <br /> APP으로 만나보세요
        </h1>
        <h2 className="font-normal absolute top-16 left-4 text-body3 md:text-body1 md:top-[7.5rem] md:left-10 text-primary-beige">
          친환경 생활, 잘 버리는 일부터 시작해볼까요?
        </h2>
        <div className="w-full flex justify-end ">
          <img src="/assets/hero-image.svg" className="w-[155px] md:w-[277px]" />
        </div>
      </section>
    </Link>
  );
};
