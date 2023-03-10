import type { NextPage } from "next";
import { fetchAPI } from "../lib/api";
import Image from "next/image";

interface CategoryProps {
  categories: Category[];
}

const CategoryPage: NextPage<CategoryProps> = ({ categories }) => {
  return (
    <>
      <main className="xl:mx-[120px] md:mx-10 mx-4">
        {categories.map((category, idx) => (
          <article key={idx} className="md:pb-20 pt-6 pb-10">
            <h2 id={String(category.id)} className="md:pb-10 pb-6 text-display3 font-extrabold" key={category.id}>
              {category.name}
            </h2>
            <div className="mx-auto w-fit">
              <div className="grid grid-cols-3 md:grid-cols-6 gap-x-8 gap-y-10">
                {category.categorySmall.map((item, idx) => (
                  <div key={idx} className="cursor-pointer">
                    <div className="bg-gray-400 w-20 h-20 rounded-full relative">
                      {item.thumbnailUrl && <Image src={item.thumbnailUrl} alt={item.name} fill className="absolute object-contain rounded-full" />}
                    </div>
                    <p key={idx} className="text-body2 text-darkgrey-3 text-center w-20 break-keep pt-1">
                      {item.name}
                    </p>
                  </div>
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
  id: number;
  attributes: {
    name: string;
    category_smalls: {
      data: {
        id: number;
        attributes: {
          name: string;
          category_thumb: {
            data: {
              attributes: {
                formats: { thumbnail: { url: string } };
              };
            };
          };
        };
      }[];
    };
  };
}

interface Category {
  id: string;
  name: string;
  categorySmall: {
    name: string;
    thumbnailUrl: string;
  }[];
}

export async function getStaticProps() {
  const categoriesRes = (await fetchAPI("/category-larges?sort=id&populate[0]=category_smalls&populate[1]=category_smalls.category_thumb")) as {
    data: CategoryRes[];
  };

  return {
    props: {
      categories: categoriesRes.data.map((categoryRes) => ({
        id: categoryRes.id,
        name: categoryRes.attributes.name,
        categorySmall: categoryRes.attributes.category_smalls.data.map((category) => ({
          name: category.attributes.name,
          thumbnailUrl: category.attributes.category_thumb.data?.attributes.formats.thumbnail.url ?? "",
        })),
      })),
    },
  };
}
