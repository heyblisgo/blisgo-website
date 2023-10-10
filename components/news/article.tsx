import { News } from "@/types/news";
import Link from "next/link";

export const Article = ({ id, attributes }: News) => {
  const { title, contents, media } = attributes;
  return (
    <article className="flex md:flex-col flex-row gap-4 max-md:py-4">
      <Link href={`/news/${id}`} className="bg-gray-200 max-md:w-[120px] max-md:flex-shrink-0 aspect-square h-fit">
        <img src={media.data[0].attributes.formats.small.url} alt={title} className="object-cover w-full h-full" />
      </Link>
      <div className="flex flex-col gap-2 max-md:justify-between">
        <h2 className="line-clamp-2 text-title2 md:text-display3 text-darkgrey-2 md:font-extrabold font-bold  break-keep">{title}</h2>
        <p className="md:text-body1 text-body2 text-darkgrey-2 font-normal line-clamp-2 break-keep">{contents}</p>
        <span className="text-grey-2 text-body3 font-normal">{attributes.published}</span>
      </div>
    </article>
  );
};
