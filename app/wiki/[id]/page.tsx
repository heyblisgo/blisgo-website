import { ShareButtonPC, ShareButtonMB } from "@/components/wiki/share";
import { SortTrashButton } from "@/components/wiki/sort-trash";
import WrongInfoModal from "@/components/wiki/wrongInfoModal";
import { fetchAPI } from "@/lib/api";
import { Wiki } from "@/types/wiki";
import { Metadata } from "next";
import Image from "next/image";

export default async function Page({ params }: { params: { id: string } }) {
  const { data: wikiRes } = await fetchAPI(`/trash-wikis/${params.id}?populate[0]=media&populate[1]=sort_trashes.image`);

  const { attributes } = wikiRes;

  const wiki: Wiki = {
    id: wikiRes.id,
    name: attributes.name,
    tags: attributes.tags?.split(",") ?? [],
    recycle: attributes.recycle,
    process: attributes?.process.split("\n\n") ?? [],
    tip: attributes.tip?.split("\n\n") ?? [],
    qna: attributes.qna?.split("\n\n") ?? [],
    description: attributes.description,
    image: attributes.media.data[0].attributes.formats.small.url,
    sort: {
      name: attributes.sort_trashes.data[0].attributes.name,
      description: attributes.sort_trashes.data[0].attributes.description,
      image: attributes.sort_trashes.data[0].attributes.image.data[0].attributes.url,
    },
  };

  const shareData = {
    title: attributes.name,
    description: attributes.tags,
    imageUrl: attributes.media.data[0].attributes.formats.small.url,
  };

  return (
    <main className="xl:mx-[120px] md:mx-auto md:px-6 md:py-4 flex flex-col gap-y-12 bg-lightgrey-1 md:bg-inherit">
      <section className="justify-center grid grid-cols-1 md:grid-cols-2 gap-x-4 w-full md:max-w-[992px] md:mx-auto">
        {/* image */}
        <div className="bg-slate-100 aspect-square md:rounded-2xl relative">
          <Image src={wiki.image} fill className="aspect-square md:rounded-2xl" alt={`${wiki.name}`} />
          <div className="absolute flex justify-between bottom-0 items-center w-full px-5 pb-5">
            <SortTrashButton name={wiki.sort.name} description={wiki.sort.description} image={wiki.sort.image} />
            {/* <ShareButtonMB /> */}
            <ShareButtonPC item={wiki.name} shareData={shareData} />
          </div>
        </div>
        {/* content */}
        <div className="flex flex-col gap-4 xl:pt-[22px] px-4 py-6">
          <div className="p-4 md:flex flex-col gap-8 hidden">
            <div className="flex justify-between items-center">
              <h1 className="text-display2 font-extrabold text-darkgrey-3">{wiki.name}</h1>
              <ShareButtonPC item={wiki.name} shareData={shareData} />
            </div>
            <p className="text-title3 font-bold text-darkgrey-2">
              {wiki.tags.map((tag, idx) => (
                <span key={idx}>#{tag}&nbsp; </span>
              ))}
            </p>
          </div>
          {/* collapse group */}
          <div className="flex flex-col gap-y-2">
            <article tabIndex={0} className="collapse collapse-arrow md:border md:border-base-300 bg-white rounded-lg">
              <input type="checkbox" className="peer" defaultChecked />
              <h2 className="collapse-title text-title1 font-semibold text-darkgrey-3">버리는 방법</h2>
              <ul className="collapse-content text-body1 text-darkgrey-2 break-after-auto">
                {wiki.process.map((txt, idx) => (
                  <li key={idx} className="pb-2 break-keep">
                    {txt}
                  </li>
                ))}
              </ul>
            </article>

            <article tabIndex={0} className="collapse collapse-arrow md:border md:border-base-300 bg-white rounded-lg">
              <input type="checkbox" className="peer" defaultChecked />
              <h2 className="collapse-title text-title1 font-semibold text-darkgrey-3">알면 더 도움되는 팁</h2>
              <ul className="collapse-content text-body1 text-darkgrey-2">
                {wiki.tip.map((txt, idx) => (
                  <li key={idx} className="pb-2 break-keep">
                    {txt}
                  </li>
                ))}
              </ul>
            </article>

            <article tabIndex={0} className="collapse collapse-arrow md:border md:border-base-300 bg-white rounded-lg">
              <input type="checkbox" className="peer" defaultChecked />
              <h2 className="collapse-title text-title1 font-semibold text-darkgrey-3">자주 묻는 질문</h2>
              <ul className="collapse-content text-body1 text-darkgrey-2">
                {wiki.qna.map((txt, idx) => (
                  <li key={idx} className="pb-2 break-keep">
                    {txt}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>
      <div className="flex flex-col gap-y-2 items-center mb-[88px]">
        <p className="text-darkgrey-2 text-label2">잘못된 정보가 있나요?</p>
        <WrongInfoModal id={wiki.id} />
      </div>
    </main>
  );
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const response = await fetchAPI(`/trash-wikis/${id}?populate[0]=seo.metaImage`);

  const trash = await response.data;
  const { attributes } = trash;
  const { seo: seoList } = attributes;
  const seo = seoList[0];
  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    openGraph: {
      type: "website",
      locale: "ko_KR",
      title: seo.metaTitle,
      description: seo.metaDescription,
      images: seo.metaImage.data
        ? [
            {
              url: seo.metaImage.data.attributes.formats.small.url,
              width: "auto",
              height: "auto",
              alt: `${seo.metaTitle}`,
            },
          ]
        : "/assets/thumbnail.png",
      siteName: "blisgo",
    },
    alternates: {
      canonical: seo.canonicalURL,
    },
  };
}
