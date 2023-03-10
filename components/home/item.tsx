import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface ItemProps {
  id: number;
  categoryName: string;
}

export const Item: React.FC<React.PropsWithChildren<ItemProps>> = ({ id, categoryName }) => {
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);
  return (
    <>
      <div className="flex flex-col gap-2 md:gap-4 shrink-0 items-center" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <Link href={`/category/#${id}`} className="relative shrink-0 w-12 h-12">
          {isHovering ? (
            <Image src={`/assets/category/${id}-hover.svg`} fill alt={`${categoryName} hover icon`} />
          ) : (
            <Image src={`/assets/category/${id}.svg`} fill alt={`${categoryName} icon`} />
          )}
        </Link>
        <h4 className="text-body3 text-darkgrey-1"> {categoryName}</h4>
      </div>
    </>
  );
};
