import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import NewVisitForm from "../Forms/NewVisitForm";
function VisitCard({ visit, onDeleteVisit, onEditVisit }) {
  const [isRevealed, setIsRevealed] = useState(false);
  const handlers = useSwipeable({
    onSwipedLeft: () => setIsRevealed(true),
    onSwipedRight: () => setIsRevealed(false),
    trackMouse: true,
    preventScrollOnSwipe: true,
  });
  const handleCardClick = () => {
    if (isRevealed) {
      setIsRevealed(false);
    } else {
      onEditVisit(visit);
    }
  };

  return (
    <div className="relative overflow-hidden rounded-xl">
      <div
        onClick={onDeleteVisit}
        className="shadow-inset-black absolute inset-y-0 right-0 flex items-center bg-red-400 px-5"
      >
        <button className="font-semibold text-white">Delete</button>
      </div>
      <div
        {...handlers}
        onClick={handleCardClick}
        // onClick={() => onEditVisit(visit)}
        className={`flex cursor-pointer flex-col gap-1 rounded-xl border-2 border-gold bg-[#BFC9B0] p-1 drop-shadow-md md:p-4 ${
          isRevealed ? "-translate-x-20 " : "translate-x-0 "
        }`}
      >
        <div className="flex w-full justify-between">
          <p className="w-full text-lg font-medium">{visit.service}</p>
          <div className="flex gap-4">
            {/* <button  className="cursor-pointer">
            ✏️
          </button> */}
          </div>
        </div>
        <div className="flex w-full items-start justify-between border-b-2 pb-2 text-center lg:gap-5 lg:text-lg">
          <p className="rounded-md bg-[#CAD2BD] p-1">
            {new Date(visit.date).toLocaleDateString("el-GR")}
          </p>
          <p className="rounded-md bg-[#CAD2BD] p-1 lg:px-5">
            Price {visit.price}€
          </p>
          <p className="rounded-md bg-[#CAD2BD] p-1 lg:px-5">
            Tips {visit.tips}€
          </p>
          <p className="rounded-md bg-[#CAD2BD] p-1 lg:px-5">{visit.payment}</p>
        </div>
        <div className="flex items-center">
          <p className="text-l w-full font-bold md:text-xl">
            Total {visit.total}€
          </p>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDeleteVisit(visit);
            }}
            className="hidden w-1/4 cursor-pointer rounded-md border border-white p-2 text-center font-semibold xl:inline"
          >
            🗑️ Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default VisitCard;
