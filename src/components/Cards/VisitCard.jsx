import { useState } from "react";
import { useSwipeable } from "react-swipeable";
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
  const tips = visit.tips || 0;
  const infoStyle = "bg-background rounded-md px-1.5 py-1 w-full text-center ";
  const formattedDate = new Date(visit.date).toLocaleDateString("el-GR", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  });

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
        className={` ${isRevealed ? "-translate-x-20 " : "translate-x-0 "}`}
      >
        <div className="bg-surface border-background flex cursor-pointer flex-col gap-1 rounded-xl border p-2 shadow-sm md:p-4">
          <p className="font-semibold">{visit.service}</p>

          <div className="border-secondary wrap flex justify-between gap-2 border-b pb-2">
            <p className={infoStyle}>{formattedDate}</p>
            <p className={infoStyle}>{visit.price}€</p>
            <p className={infoStyle}>Tips:{tips}€</p>
            <p className={infoStyle}>{visit.payment}</p>
          </div>

          <div className="flex items-center justify-between">
            <p className="font-semibold">Total {visit.total}€</p>
            {/* Delete desktop */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onDeleteVisit(visit);
              }}
              className="text-primary hidden cursor-pointer p-1 lg:flex"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default VisitCard;
