import Image from "next/image";
interface SortProps {
  name: string;
  description: string;
  image: string;
}
export const SortTrashButton = ({ name, description, image }: SortProps) => {
  return (
    <div className="dropdown dropdown-top">
      <label tabIndex={0} className="flex gap-[6px] justify-center items-center bg-white bg-opacity-90 shadow-md rounded-lg p-2 cursor-pointer">
        <Image src={image} alt="heart icon" width={16} height={16} />
        <span className="md:text-label2 text-label3 text-darkgrey-2">{name}</span>
        <Image src="/assets/icon/question.svg" alt="question icon" width={14} height={14} />
      </label>
      <ul tabIndex={0} className="dropdown-content menu px-6 py-8 shadow bg-base-100 rounded-box w-72">
        <li className="text-title2 font-bold p-0 pb-4">{name}</li>
        <li className="break-keep p-0">{description}</li>
      </ul>
    </div>
  );
};
