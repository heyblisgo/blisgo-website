import type { NextPage } from "next";
import { fetchAPI } from "../lib/api";
import Image from "next/image";
import Link from "next/link";

interface CategoryProps {
  categories: Category[];
}

const CategoryPage: NextPage<CategoryProps> = ({ categories }) => {
  return (
    <>
      <main className="xl:mx-auto xl:w-[1280px] md:mx-10 mx-4">
        {categories.map((category, idx) => (
          <article key={idx} className="md:pb-20 pt-6 pb-10">
            <h2 id={String(category.id)} className="md:pb-10 pb-6 text-display3 font-extrabold" key={category.id}>
              {category.name}
            </h2>
            <div className="mx-auto w-fit">
              <div className="grid grid-cols-3 md:grid-cols-6 gap-x-8 gap-y-10">
                {category.trashWikis.map((item, idx) => (
                  <Link key={idx} className="cursor-pointer" href={`wiki/${item.id}`}>
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
    </>
  );
};

export default CategoryPage;

interface CategoryRes {
  id: string;
  attributes: {
    name: string;
    trash_wikis: {
      data: {
        id: string;
        attributes: {
          name: string;
          media: {
            data: {
              attributes: {
                formats: { thumbnail: { url: string } };
              };
            }[];
          };
        };
      }[];
    };
  };
}

interface Category {
  id: string;
  name: string;
  trashWikis: {
    id: string;
    name: string;
    mediaData: {
      attributes: {
        formats: { thumbnail: { url: string } };
      };
    }[];
  }[];
}

export async function getStaticProps() {
  const categoriesRes = (await fetchAPI("/category-larges?sort=id&populate[1]=trash_wikis.media")) as {
    data: CategoryRes[];
  };

  return {
    props: {
      categories: categoriesRes.data.map((categoryRes) => ({
        id: categoryRes.id,
        name: categoryRes.attributes.name,
        trashWikis: categoryRes.attributes.trash_wikis.data.map((wiki) => ({
          id: wiki.id,
          name: wiki.attributes.name,
          mediaData: wiki.attributes.media.data,
        })),
      })),
    },
  };
}
