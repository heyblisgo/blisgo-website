"use client";

import classcat from "classcat";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface PaginationProps {
  totalPages: number;
  itemsPerPage: number;
  pagesPerGroup: number;
  link: string;
  page: number;
  query?: string;
}

export const Pagination = ({ totalPages, itemsPerPage, pagesPerGroup, link, page }: PaginationProps) => {
  const { push } = useRouter();
  const [currentPage, setCurrentPage] = useState(page);
  const [currentGroup, setCurrentGroup] = useState(1);

  const totalGroups = Math.ceil(totalPages / pagesPerGroup);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  const handleGroupChange = (group: number) => {
    setCurrentGroup(group);
  };

  useEffect(() => {
    const group = Math.ceil(currentPage / pagesPerGroup);
    setCurrentGroup(group);
  }, [currentPage, pagesPerGroup]);

  const onPageChange = (page: number) => {
    const params = new URLSearchParams();
    params.append("page", String(page));
    params.append("size", String(itemsPerPage));

    push(`${link}?${params.toString()}`);
  };

  const pageNumbers = Array.from(
    { length: Math.min(currentGroup * pagesPerGroup, totalPages) - (currentGroup - 1) * pagesPerGroup },
    (_, i) => (currentGroup - 1) * pagesPerGroup + 1 + i,
  );

  return (
    <div className="flex w-full flex-col items-center gap-4 text-lg">
      <div className="flex btn-group gap-4">
        {/* todo: 그룹이 없는 경우 disable 처리 */}
        <button className="w-6" onClick={() => currentGroup > 1 && handleGroupChange(currentGroup - 1)} disabled>
          &lt;
        </button>
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => handlePageChange(number)}
            className={classcat([
              "btn bg-white border-none btn-sm !rounded-full text-darkgrey-2 font-normal text-body2",
              currentPage === number && "font-black bg-primary-beige rounded-full",
            ])}
          >
            {number}
          </button>
        ))}
        <button className="w-6" onClick={() => currentGroup < totalGroups && handleGroupChange(currentGroup + 1)} disabled>
          &gt;
        </button>
      </div>
    </div>
  );
};
