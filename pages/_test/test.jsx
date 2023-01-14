import { fetchAPI } from "../../lib/api";
// import { getStrapiMedia } from "../lib/media";

const Test = ({ categories }) => {
  return (
    <div>
      {/* <p>{JSON.stringify(testpage)}</p> */}
      {categories.map((category) => (
        <p key={category.id}>{category.attributes.name}</p>
      ))}
    </div>
  );
};

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

export default Test;
