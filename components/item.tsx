import React from "react";

interface ItemProps {
  categoryName: string;
}

export const Item: React.FC<React.PropsWithChildren<ItemProps>> = ({ categoryName }) => {
  return (
    <>
      <div className="flex flex-col gap-2 md:gap-4 shrink-0 items-center">
        <div className="shrink-0 w-[40px] h-[40px] border border-primary-beige"></div>
        <h4 className="text-body3 text-darkgrey-1"> {categoryName}</h4>
      </div>
    </>
  );
};
