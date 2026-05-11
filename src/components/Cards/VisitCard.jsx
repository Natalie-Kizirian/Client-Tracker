import { useState } from "react";
import NewVisitForm from "../Forms/NewVisitForm";
function VisitCard({ visit, onDeleteVisit, onEditVisit }) {
  // const [modalisVisible, setModalVisible] = useState(false);

  // function showModal() {
  //   setModalVisible(true);
  // }
  return (
    <>
      <div className="flex justify-between">
        <p className="w-full">
          {new Date(visit.date).toLocaleDateString("el-GR")}
        </p>
        <p className="w-full">{visit.service}</p>
        <p className="w-full">Price {visit.price}</p>
        <p className="w-full">Tips {visit.tips}</p>
        <p className="w-full">{visit.payment}</p>
        <p className="w-full">Total {visit.total}</p>
        <button onClick={() => onEditVisit(visit)}>Edit</button>
        <button onClick={onDeleteVisit} className="w-full">
          Delete
        </button>
      </div>
    </>
  );
}
export default VisitCard;
