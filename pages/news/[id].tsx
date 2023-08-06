import { Article } from "@/components/news/article";
import { ShareButtonPC, ShareButtonMB } from "@/components/wiki/share";
import { fetchAPI } from "@/lib/api";
import type { NextPage } from "next";
import { News } from "@/pages/news";

const NewsArticlePage: NextPage<News> = ({ id, attributes }) => {
  const { title, contents, published, media } = attributes;

  return (
    <>
      <main className="xl:mx-[120px] md:mx-auto md:px-6 md:py-4 flex flex-col gap-y-10 bg-lightgrey-1 md:bg-inherit">
        <section className="justify-center grid grid-cols-1 md:grid-cols-2 gap-x-4 w-full md:max-w-[992px] md:mx-auto">
          {/* image */}
          <div className="bg-slate-100 aspect-square md:rounded-2xl relative">
            <div className="aspect-square md:rounded-2xl">
              {/* todo : add carousel */}
              <img src={media.data[0].attributes.formats.small.url} alt={title} className="object-cover w-full h-full" />
            </div>
            <div className="absolute bottom-0 right-0 px-5 pb-5">
              <ShareButtonMB />
            </div>
          </div>
          {/* content */}
          <div className="flex flex-col gap-4 xl:pt-[22px] px-4 py-6">
            <div className="p-4 flex flex-col gap-8">
              <div className="flex justify-between items-center">
                <h1 className="text-display2 font-extrabold text-darkgrey-3">{title}</h1>
                <div className="hidden md:block">
                  <ShareButtonPC />
                </div>
              </div>
            </div>
            <div className="flex flex-col md:border md:border-lightgrey-2 bg-white rounded-lg p-4 gap-8">
              <h2 className="text-body1 font-normal text-darkgrey-2 break-keep">{contents}</h2>
              <p className="text-darkgrey-2 text-label2">{published}</p>
            </div>
            {/* pagination */}
            <div className="flex gap-2 self-end pt-6 max-md:w-full max-md:justify-between">
              <button className="flex gap-1 btn bg-lightgrey-2 rounded-lg border-none max-md:flex-1">
                <span>&lt;</span>
                <span>이전글</span>
              </button>
              <button className="btn bg-white rounded-lg max-md:flex-1">목록보기</button>
              <button className="flex gap-1 btn bg-lightgrey-2 rounded-lg border-none max-md:flex-1">
                <span>다음글</span>
                <span>&gt;</span>
              </button>
            </div>
          </div>
        </section>
        <section className="border-t border-lightgrey-2 pt-6 mx-4">
          <h1 className="font-bold text-title1 text-darkgrey-3">이 소식은 어때요?</h1>
          <div className="py-2 md:py-10 grid md:grid-cols-3 md:grid-rows-1 grid-cols-1 md:gap-y-10 gap-x-4 max-md:divide-y divide-lightgrey-2 overflow-auto">
            {/* <Article />
            <Article />
            <Article /> */}
          </div>
        </section>
      </main>
    </>
  );
};

export default NewsArticlePage;

export async function getServerSideProps({ params }: { params: { id: string } }) {
  const news = await fetchAPI(`/newsinfos/${params.id}?populate[0]=media`);

  return {
    props: {
      ...news.data, //todo : 미디어에서 첫번째 이미지만 리턴
      // todo : contents에 \n 을 split
    },
  };
}
