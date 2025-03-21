import { fetchAPI } from "../../lib/api";
import Image from "next/image";
import Link from "next/link";
import { CategoryRes } from "@/types/category";

export default async function Page() {
  const categoriesRes = (await fetchAPI("/category-larges?sort=id&populate[1]=trash_wikis.media&populate[2]=trash_wikis.seo")) as {
    data: CategoryRes[];
  };

  const categories = categoriesRes.data.map((categoryRes) => ({
    id: categoryRes.id,
    name: categoryRes.attributes.name,
    trashWikis: categoryRes.attributes.trash_wikis.data.map((wiki) => ({
      id: wiki.id,
      name: wiki.attributes.name,
      mediaData: wiki.attributes.media.data,
      seo: wiki.attributes.seo,
    })),
  }));

  return (
    <main className="xl:mx-[120px] xl:w-[1280px] md:mx-10 mx-4 2xl:mx-auto">
      {categories.map((category, idx) => (
        <article key={idx} className="md:pb-20 pt-6 pb-10">
          <h2 id={String(category.id)} className="md:pb-10 pb-6 text-display3 font-extrabold" key={category.id}>
            {category.name}
          </h2>
          <div className="mx-auto w-fit">
            <div className="grid grid-cols-3 md:grid-cols-6 gap-x-8 gap-y-10">
              {category.trashWikis.map((item, idx) => (
                // <Link key={idx} className="cursor-pointer" href={`wiki/${item.id}?canonical=${item.seo[0].canonicalURL}`}>
                <Link key={idx} className="cursor-pointer" href={`${item.seo[0].canonicalURL.replace("https://blisgo.com/", "")}?id=${item.id}`}>
                  <div className="bg-gray-400 w-20 h-20 rounded-full relative">
                    <Image
                      src={item.mediaData[0].attributes.formats.thumbnail.url}
                      alt={item.name}
                      fill
                      className="absolute object-contain rounded-full"
                      sizes="156px"
                    />
                  </div>
                  <p key={idx} className="text-body2 text-darkgrey-3 text-center w-20 break-keep pt-1">
                    {item.name}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </article>
      ))}
    </main>
  );
}
