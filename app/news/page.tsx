import { Pagination } from "@/components/global/pagination";
import { Article } from "@/components/news/article";
import { fetchAPI } from "@/lib/api";
import { NewsList } from "@/types/news";

export interface SearchParams {
  page?: number;
  size?: number;
}

export default async function Page({ searchParams }: { searchParams: SearchParams }) {
  const { page = 1, size = 9 } = searchParams;
  const newsList: NewsList = await fetchAPI(`/newsinfos?populate[0]=media&sort=id&pagination[page]=${page}&pagination[pageSize]=${size}`);
  const pageCount = newsList.meta.pagination.pageCount;

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
          <Pagination link="news" itemsPerPage={size} pagesPerGroup={5} totalPages={pageCount} page={page} />
        </div>
      </main>
    </>
  );
}
