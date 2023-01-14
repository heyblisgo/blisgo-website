import { Hero } from "../components/home/hero";
import type { NextPage } from "next";
import Image from "next/image";
import { Card } from "../components/home/card";
import { Item } from "../components/home/item";
import { News } from "../components/home/news";
import { Shop } from "../components/home/shop";
import { fetchAPI } from "../lib/api";

interface HomeProps {
  categories: {
    id: number;
    attributes: {
      name: string;
    };
  }[];
}

const Home: NextPage<HomeProps> = ({ categories }) => {
  return (
    <main className="flex flex-col">
      {/* hero section, search bar, popular keyword, */}
      <Hero />
      <section className="section_common mt-0">
        <div className="grid grid-cols-6 md:grid-cols-12 gap-4 xl:mx-[80px] justify-between overflow-auto pb-6">
          {categories.map((category) => (
            <Item key={category.id} id={category.id} categoryName={category.attributes.name} />
          ))}
        </div>
      </section>
      <section className="section_common">
        <h2 className="section_title">블리스고 새소식</h2>
        <div className="flex gap-4 overflow-auto pb-10">
          <News />
          <News />
          <News />
          <News />
        </div>
      </section>
      <section className="section_common">
        <h2 className="section_title">업데이트된 쓰레기</h2>
        <div className="flex gap-4 overflow-auto pb-10">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
      <section className="section_common">
        <h2 className="section_title">쓰레기 없는 가게</h2>
        <div className="flex gap-4 overflow-auto pb-6">
          <Shop />
          <Shop />
          <Shop />
          <Shop />
        </div>
      </section>
    </main>
  );
};

export default Home;

export async function getStaticProps() {
  const categoriesRes = await fetchAPI("/category-larges", {
    populate: {
      id: "*",
      name: "*",
    },
  });

  return {
    props: {
      categories: categoriesRes.data,
    },
  };
}
