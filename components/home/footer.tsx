import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-lightgrey-1">
      <div className="flex flex-col gap-6 pt-10 md:pb-[60px] pb-[116px] px-4 xl:mx-auto xl:w-[1280px] md:px-6">
        <div className="flex items-end">
          <Image src="/assets/footer-img-logo.svg" alt="footer img logo" width={71} height={71} />
          <Image src="/assets/main-logo.svg" alt="main logo" width={132} height={63} />
        </div>
        <div className="flex gap-4 text-title3 text-darkgrey-2 font-bold">
          <Link href="/about" className="text-dark-green" rel="noopener noreferrer">
            앱 다운로드
          </Link>
          <Link href="#" className="flex items-center gap-1" target="_blank" rel="noopener noreferrer">
            <span>브랜드스토리</span>
            <div className="relative flex items-center shrink-0 w-4 h-4">
              <Image className="absolute object-contain" src="/assets/notion-logo.svg" alt="notion logo" fill />
            </div>
          </Link>
          <Link href="#" className="flex items-center gap-1 text-darkgrey-2" target="_blank" rel="noopener noreferrer">
            브랜드스토리
            <div className="relative flex items-center shrink-0 w-4 h-4">
              <Image className="absolute object-contain" src="/assets/instagram-logo.svg" alt="instagram logo" fill />
            </div>
          </Link>
        </div>
        <div className="flex md:justify-between flex-col md:flex-row gap-6">
          <div className="flex items-center text-body3 text-darkgrey-1 shrink-0 flex-wrap w-full gap-x-2 gap-y-2 flex-1 basis-1/2 max-w-[328px] xl:max-w-fit">
            {["블리스고 주식회사", "|", "대표 홍승규", "|", "전화 070-7717-9646", "|", "사업자번호 599-86-02235", "|", "이메일 heyblisgo@gmail.com"].map(
              (text, idx) => (
                <span key={idx}>{text}</span>
              ),
            )}
          </div>
          <div className="flex items-center text-label2 text-darkgrey-1 font-semibold gap-2 md:self-end">
            <Link href="https://blisgo.com/terms-of-use/" target="_blank" rel="noopener noreferrer">
              서비스 이용약관
            </Link>
            <span className="font-normal">|</span>
            <Link href="https://blisgo.com/privacy-policy/" target="_blank" rel="noopener noreferrer">
              개인정보 처리방침
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
