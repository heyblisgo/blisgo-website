import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#F9F9F9]">
      <div className="flex flex-col gap-6 pt-10 pb-[3.75rem] px-6 xl:mx-auto xl:w-[1280px]">
        <div className="flex items-end mb">
          <div className="relative flex items-center shrink-0 w-[71.6px] h-[71.6px]">
            <Image className="absolute object-contain" src="/assets/footer-img-logo.svg" alt="footer img logo" fill />
          </div>
          <div className="relative flex items-center shrink-0 w-[132.1px] h-[63.58px]" id="footer-text-logo-wrapper">
            <Image className="absolute object-contain" src="/assets/main-logo.svg" alt="main logo" fill />
          </div>
        </div>
        <div className="flex gap-4 text-sm font-bold leading-[18px]">
          <a href="#" className="text-dark-green">
            앱 다운로드
          </a>
          <a href="#" className="flex items-center gap-1 text-darkgrey-2">
            <span>브랜드스토리</span>
            <div className="relative flex items-center shrink-0 w-4 h-4">
              <Image className="absolute object-contain" src="/assets/notion-logo.svg" alt="notion logo" fill />
            </div>
          </a>
          <a href="#" className="flex items-center gap-1 text-darkgrey-2">
            <span>브랜드스토리</span>
            <div className="relative flex items-center shrink-0 w-4 h-4">
              <Image className="absolute object-contain" src="/assets/instagram-logo.svg" alt="instagram logo" fill />
            </div>
          </a>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center text-xs font-normal leading-[18px] text-darkgrey-3">
            <span className="pr-2">블리스고 주식회사</span>
            <span className="w-3 h-0 border-t border-grey-1 rotate-90	" />
            <span className="px-2">대표 홍승규</span>
            <span className="w-3 h-0 border-t border-grey-1 rotate-90	" />
            <span className="px-2">전화 070-7717-9646</span>
            <span className="w-3 h-0 border-t border-grey-1 rotate-90	" />
            <span className="px-2">사업자번호 599-86-02235</span>
            <span className="w-3 h-0 border-t border-grey-1 rotate-90	" />
            <span className="px-2">이메일 heyblisgo@gmail.com</span>
          </div>
          <div className="flex items-center text-xs font-semibold leading-4 text-darkgrey-3">
            <a href="https://blisgo.com/terms-of-use/" className="px-2">
              서비스 이용약관
            </a>
            <span className="w-3 h-0 border-t border-grey-1 rotate-90	" />
            <a href="https://blisgo.com/privacy-policy/" className="pl-2">
              개인정보 처리방침
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
