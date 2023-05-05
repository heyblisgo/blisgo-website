export const Hero = () => {
  return (
    <section className="xl:mx-auto xl:w-[1280px] mx-4 md:mx-6 relative rounded-lg p-4 pb-3 md:pb-6 md:pt-8 md:pl-10 bg-[linear-gradient(242.94deg,#015F27_0%,#6BB89C_100%)] bg-white mt-4">
      <h1 className="font-bold md:font-extrabold text-white text-title1 md:text-display1 mb-1 md:mb-2">
        분리배출이 더 쉬워지는 블리스고 <br /> APP으로 만나보세요
      </h1>
      <h2 className="font-normal text-body3 md:text-body1 text-primary-beige">친환경 생활, 잘 버리는 일부터 시작해볼까요?</h2>
      <div className="absolute right-0 top-0 w-[155px] md:w-[277px]">
        <img src="/assets/hero-image.svg" />
      </div>
    </section>
  );
};
