import { Hero } from "../components/home/hero";
import Image from "next/image";
import { Item } from "../components/home/item";
import { fetchAPI } from "../lib/api";
import Link from "next/link";
import { Category, UpdatedTrash } from "@/types/home";
import { shopList } from "@/data/shopList";
import { NewsList } from "@/types/news";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "블리스고",
  description: "쓰레기 백과사전, 다양한 쓰레기 분리 배출법을 알아보세요",
  openGraph: {
    title: "블리스고",
    description: "쓰레기 백과사전, 다양한 쓰레기 분리 배출법을 알아보세요",
    images: [
      {
        url: "/assets/thumbnail.png",
        width: 600,
        height: 400,
        alt: `블리스고 로고`,
      },
    ],
  },
};

export default async function Page() {
  const categoriesRes = await fetchAPI("/category-larges?sort=id");
  const updatedTrashRes = await fetchAPI(
    "/trash-wikis?fields[0]=name&fields[1]=updatedAt&populate[media][fields][0]=url&populate[seo][fields][0]=canonicalURL&sort[0]=updatedAt:desc&pagination[limit]=10",
  );
  const newsList: NewsList = await fetchAPI("/newsinfos?pagination[limit]=4&populate[0]=media&sort=id&pagination[start]=0");

  const categories: Category[] = categoriesRes.data;
  const updatedTrash: UpdatedTrash[] = updatedTrashRes.data;

  return (
    <main className="flex flex-col">
      {/* hero section, search bar, popular keyword, */}
      <Hero />
      <section className="section_common mt-0">
        <div className="grid grid-cols-6 md:grid-cols-11 gap-4 justify-between pb-6">
          {categories.map((category) => (
            <Item key={category.id} id={category.id} categoryName={category.attributes.name} />
          ))}
        </div>
      </section>
      <hr className="h-4 bg-lightgrey-1 border-none" />
      <section className="section_common">
        <div className="flex justify-between">
          <h2 className="section_title">블리스고 새소식</h2>
          <Link href="/news" className="text-label1 text-darkgrey-2">
            더보기 &gt;
          </Link>
        </div>
        <div className="flex gap-4 overflow-auto pb-10">
          {newsList.data.map(({ id, attributes }) => (
            <div className="shrink-0 w-[296px] h-[296px] border border-primary-beige" key={`news-${id}`}>
              <Link href={`/news/${id}`}>
                <img src={attributes.media.data[0].attributes.formats.small.url} alt={attributes.title} className="object-cover w-full h-full" />
              </Link>
            </div>
          ))}
        </div>
      </section>
      <hr className="h-4 bg-lightgrey-1 border-none" />
      <section className="section_common">
        <h2 className="section_title">업데이트된 쓰레기</h2>
        <div className="flex gap-4 overflow-auto pb-10">
          {updatedTrash.map((trash, idx) => (
            <a
              className="flex flex-col items-center gap-1"
              key={`updated-trash-${idx}`}
              href={`${trash.attributes.seo[0].canonicalURL.replace("https://blisgo.com/", "")}?id=${trash.id}`}
            >
              <div className="shrink-0 w-[48px] h-[48px] md:w-[160px] md:h-[160px] border border-lightgrey-3 rounded-lg relative">
                <Image
                  src={trash.attributes.media.data[0].attributes.url}
                  fill
                  alt={`${trash.attributes.name} image`}
                  className="rounded-lg absolute object-contain"
                />
              </div>
              <h4 className=" text-darkgrey-1 text-body3">{trash.attributes.name}</h4>
            </a>
          ))}
        </div>
      </section>
      <hr className="h-4 bg-lightgrey-1 border-none" />
      <section className="section_common">
        <div className="flex justify-between">
          <h2 className="section_title">쓰레기 없는 가게</h2>
          <Link href="/news" className="text-label1 text-darkgrey-2">
            더보기 &gt;
          </Link>
        </div>
        <div className="flex gap-4 overflow-auto pb-6">
          {shopList.map((shop, idx) => (
            <div className="shrink-0 flex flex-col gap-2 items-center" key={idx}>
              <Link href={shop.link} target="_blank" rel="noopener noreferrer">
                <div className="w-[240px] h-[160px] md:w-[296px] md:h-[160px] border rounded-[4px] border-primary-beige relative">
                  <Image src={`/assets/shop/${idx + 1}.jpg`} alt="shop image" fill className="object-cover absolute" />
                </div>
              </Link>
              <h4 className="text-body3 md:text-body1 text-darkgrey-2">{shop.title}</h4>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
