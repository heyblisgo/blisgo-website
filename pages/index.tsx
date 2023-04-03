import { Hero } from "../components/home/hero";
import type { NextPage } from "next";
import Image from "next/image";
import { Item } from "../components/home/item";
import { fetchAPI } from "../lib/api";
import Link from "next/link";

interface HomeProps {
  categories: {
    id: number;
    attributes: {
      name: string;
    };
  }[];
  updatedTrash: {
    id: number;
    attributes: {
      name: string;
      media: {
        data: {
          attributes: {
            url: string;
          };
        }[];
      };
    };
  }[];
}

const Home: NextPage<HomeProps> = ({ categories, updatedTrash }) => {
  const newsList = [
    "https://www.instagram.com/p/CowGRysvXqA/",
    "https://www.instagram.com/p/CeZ_Jwzr5VO/",
    "https://www.instagram.com/p/CY52Q6xjY92/",
    "https://www.instagram.com/p/Ch7VwH1PIKZ/",
  ];
  const shopList = [
    {
      title: "덕분애",
      link: "https://blisgo.com/%ec%a0%9c%eb%a1%9c%ec%9b%a8%ec%9d%b4%ec%8a%a4%ed%8a%b8%ec%83%b5/%eb%8d%95%eb%b6%84%ec%95%a0-%ec%a0%9c%eb%a1%9c%ec%9b%a8%ec%9d%b4%ec%8a%a4%ed%8a%b8%ec%83%b5/",
    },
    {
      title: "슬기로운생활",
      link: "https://blisgo.com/%ec%a0%9c%eb%a1%9c%ec%9b%a8%ec%9d%b4%ec%8a%a4%ed%8a%b8%ec%83%b5/%ec%8a%ac%ea%b8%b0%eb%a1%9c%ec%9a%b4%ec%83%9d%ed%99%9c/",
    },
    { title: "유민얼랏", link: "https://blisgo.com/%ec%a0%9c%eb%a1%9c%ec%9b%a8%ec%9d%b4%ec%8a%a4%ed%8a%b8%ec%83%b5/%ec%9c%a0%eb%af%bc%ec%96%bc%eb%9e%8f/" },
    { title: "지구샵", link: "https://blisgo.com/%ec%a0%9c%eb%a1%9c%ec%9b%a8%ec%9d%b4%ec%8a%a4%ed%8a%b8%ec%83%b5/%ec%a7%80%ea%b5%ac%ec%83%b5/" },
  ];
  return (
    <main className="flex flex-col">
      {/* hero section, search bar, popular keyword, */}
      <Hero />
      <section className="section_common mt-0">
        <div className="grid grid-cols-6 md:grid-cols-11 gap-4 justify-between overflow-auto pb-6">
          {categories.map((category) => (
            <Item key={category.id} id={category.id} categoryName={category.attributes.name} />
          ))}
        </div>
      </section>
      <section className="section_common">
        <h2 className="section_title">블리스고 새소식</h2>
        <div className="flex gap-4 overflow-auto pb-10">
          {newsList.map((link, idx) => (
            <div className="shrink-0 w-[296px] h-[296px] border border-primary-beige" key={idx}>
              <Link href={link} target="_blank" rel="noopener noreferrer">
                <Image src={`/assets/news/${idx + 1}.png`} alt="news image" width={296} height={296} />
              </Link>
            </div>
          ))}
        </div>
      </section>
      <section className="section_common">
        <h2 className="section_title">업데이트된 쓰레기</h2>
        <div className="flex gap-4 overflow-auto pb-10">
          {updatedTrash.map((trash, idx) => (
            <div className="flex flex-col items-center gap-1" key={idx}>
              <div className="shrink-0 w-[48px] h-[48px] md:w-[160px] md:h-[160px] border border-lightgrey-3 rounded-lg relative">
                <Image
                  src={trash.attributes.media.data[0].attributes.url}
                  fill
                  alt={`${trash.attributes.name} image`}
                  className="rounded-lg absolute object-contain"
                />
              </div>
              <h4 className=" text-darkgrey-1 text-body3">{trash.attributes.name}</h4>
            </div>
          ))}
        </div>
      </section>
      <section className="section_common">
        <h2 className="section_title">쓰레기 없는 가게</h2>
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
};

export default Home;

export async function getStaticProps() {
  const categoriesRes = await fetchAPI("/category-larges?sort=id");
  const updatedTrashRes = await fetchAPI(
    "/trash-wikis?fields[0]=name&fields[0]=updatedAt&populate[media][fields][0]=url&sort[0]=updatedAt:desc&pagination[limit]=10",
  );
  return {
    props: {
      categories: categoriesRes.data,
      updatedTrash: updatedTrashRes.data,
    },
  };
}
