export const Pagination = () => {
  return (
    <div className="btn-group gap-4">
      {["<", 1, 2, 3, 4, 5, ">"].map((elem, i) => (
        <button key={i} className="btn bg-white border-none btn-sm !rounded-full text-darkgrey-2 font-normal text-body2">
          {elem}
        </button>
      ))}
    </div>
  );
};
