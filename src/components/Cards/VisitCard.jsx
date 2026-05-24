import { useState } from "react";
import NewVisitForm from "../Forms/NewVisitForm";
function VisitCard({ visit, onDeleteVisit, onEditVisit }) {
  // const [modalisVisible, setModalVisible] = useState(false);

  // function showModal() {
  //   setModalVisible(true);
  // }
  return (
    <div className="flex flex-col gap-1 rounded-xl border-2 border-[#b99a52] bg-[#BFC9B0] p-1 drop-shadow-md md:p-4">
      <div className="flex w-full">
        <p className="w-full text-lg font-medium">{visit.service}</p>
        <div className="flex gap-4">
          <button onClick={() => onEditVisit(visit)} className="cursor-pointer">
            ✏️
          </button>
          <button
            onClick={onDeleteVisit}
            className="w-full cursor-pointer text-end"
          >
            🗑️
          </button>
        </div>
      </div>
      <div className="flex w-full items-start justify-between border-b-2 pb-2 text-center lg:gap-5 lg:text-lg">
        <p className="rounded-md bg-[#CAD2BD] p-1">
          {new Date(visit.date).toLocaleDateString("el-GR")}
        </p>
        <p className="rounded-md bg-[#CAD2BD] p-1 lg:px-5">
          Price {visit.price} €
        </p>
        <p className="rounded-md bg-[#CAD2BD] p-1 lg:px-5">
          Tips {visit.tips} €
        </p>
        <p className="rounded-md bg-[#CAD2BD] p-1 lg:px-5">{visit.payment}</p>
      </div>
      <p className="text-l w-full font-bold md:text-xl">
        Total {visit.total} €
      </p>
    </div>
  );
}
export default VisitCard;
