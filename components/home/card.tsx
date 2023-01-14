export const Card = () => {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="shrink-0 w-[48px] h-[48px] md:w-[296px] md:h-[96px] border border-lightgrey-3 rounded-lg"></div>
      <h4 className="md:hidden text-darkgrey-1 text-body3">수건</h4>
    </div>
  );
};
