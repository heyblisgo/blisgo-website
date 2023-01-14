import type { NextPage } from "next";
import { fetchAPI } from "../lib/api";

interface CategoryProps {
  categories: {
    id: number;
    attributes: {
      name: string;
      category_smalls: {
        data: {
          id: number;
          attributes: {
            name: string;
          };
        }[];
      };
    };
  }[];
}

const Category: NextPage<CategoryProps> = ({ categories }) => {
  return (
    <>
      <main>
        {categories.map((category) => (
          <div key={category.id}>
            <h1 className="text-blue-400" key={category.id}>
              {category.attributes.name}
            </h1>
            <div className="hidden lg:block">
              {category.attributes.category_smalls.data.map((item, idx) => (
                <p key={idx}>{item.attributes.name}</p>
              ))}
            </div>
          </div>
        ))}
      </main>
    </>
  );
};

export default Category;

export async function getStaticProps() {
  const categoriesRes = await fetchAPI("/category-larges", {
    "populate[]": "category_smalls",
  });

  return {
    props: {
      categories: categoriesRes.data,
    },
  };
}
