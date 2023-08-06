import { Pagination } from "@/components/global/pagination";
import { Article } from "@/components/news/article";
import { fetchAPI } from "@/lib/api";
import { NextPage } from "next";

const NewsPage: NextPage<NewsListProps> = ({ newsList }) => {
  return (
    <>
      <main className="md:mx-10 mx-4 md:mt-6 md:mb-20 mt-6 mb-8 md:px-6 md:py-4 xl:mx-auto xl:w-[1280px]">
        <h1 className="hidden md:block pb-4 text-display2 font-extrabold text-darkgrey-3">블리스고 새소식</h1>
        <p className="hidden md:block text-title3 text-darkgrey-2 font-bold">우리가 살고 있는 지구를 건강하게 돌보는 블리스고 새소식 소개 문구</p>
        <section className="py-2 md:py-10 grid md:grid-cols-3 grid-cols-1 md:gap-y-10 gap-x-4 max-md:divide-y divide-lightgrey-2">
          {newsList.data.map(({ id, attributes }) => (
            <Article key={id} id={id} attributes={attributes} />
          ))}
        </section>
        <div className="flex justify-center">
          <Pagination />
        </div>
      </main>
    </>
  );
};

export default NewsPage;

export interface News {
  id: string;
  attributes: {
    title: string;
    contents: string;
    published: string;
    media: {
      data: {
        id: string;
        attributes: {
          formats: { small: { url: string } };
        };
      }[];
    };
  };
}
export interface NewsListProps {
  newsList: {
    data: News[];
    meta: {
      pagination: {
        limit: number;
        start: number;
        total: number;
      };
    };
  };
}

export async function getStaticProps() {
  const newsList = await fetchAPI("/newsinfos?pagination[limit]=9&populate[0]=media&sort=id&pagination[start]=0");

  return {
    props: {
      newsList: newsList, //todo : 미디어에서 첫번째 이미지만 리턴
    },
  };
}
