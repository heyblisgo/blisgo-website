import Image from "next/image";

export const ShareButtonMB = () => (
  <div className="dropdown dropdown-bottom dropdown-end">
    <label tabIndex={0} className="text-label2 text-darkgrey-3 items-center justify-between bg-lightgrey-2 rounded-3xl p-2 gap-1 flex cursor-pointer md:hidden">
      <Image src="/assets/sns/share.svg" alt="share icon" width={16} height={16} />
    </label>
    <ul tabIndex={0} className="dropdown-content menu py-8 px-6 bg-base-100 shadow-dropdown rounded-lg w-[264px] flex-row justify-between">
      {/* todo : update href */}
      <h2 className="text-title2 font-bold self-stretch w-full pb-4">공유하기</h2>
      {[
        { name: "카카오톡", icon: "kakao", href: "#" },
        { name: "페이스북", icon: "facebook", href: "#" },
        { name: "트위터", icon: "twitter", href: "#" },
        { name: "링크복사", icon: "link", href: "#" },
      ].map((item) => (
        <li className="h-fit w-fit" key={`share-${item.icon}`}>
          <a className="flex flex-col gap-1 p-1 text-label2 font-normal" href={item.href}>
            <Image src={`/assets/sns/${item.icon}.svg`} alt={`${item.icon} icon`} width={40} height={40} />
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export const ShareButtonPC = () => (
  <div className="dropdown dropdown-bottom dropdown-end">
    <label tabIndex={0} className="text-label2 text-darkgrey-3 items-center justify-between bg-lightgrey-2 rounded-3xl p-2 gap-1 flex cursor-pointer">
      <Image src="/assets/sns/share.svg" alt="share icon" width={16} height={16} />
      공유하기
    </label>
    <ul tabIndex={0} className="dropdown-content menu py-8 px-6 bg-base-100 shadow-dropdown rounded-lg w-[264px] flex-row justify-between">
      {/* todo : update href */}
      <h2 className="text-title2 font-bold self-stretch w-full pb-4">공유하기</h2>
      {[
        { name: "카카오톡", icon: "kakao", href: "#" },
        { name: "페이스북", icon: "facebook", href: "#" },
        { name: "트위터", icon: "twitter", href: "#" },
        { name: "링크복사", icon: "link", href: "#" },
      ].map((item) => (
        <li className="h-fit w-fit" key={`share-${item.icon}`}>
          <a className="flex flex-col gap-1 p-1 text-label2 font-normal" href={item.href}>
            <Image src={`/assets/sns/${item.icon}.svg`} alt={`${item.icon} icon`} width={40} height={40} />
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  </div>
);
