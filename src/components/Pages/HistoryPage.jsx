import VisitCard from "../Cards/VisitCard";
import NewVisitForm from "../Forms/NewVisitForm";
import Modal from "../Modal";
import { useState } from "react";

function HistoryPage({ client, visits, onAddVisit }) {
  const [modalisVisible, setModalVisible] = useState(false);

  function hideModal() {
    setModalVisible(false);
  }

  function showModal() {
    setModalVisible(true);
  }
  return (
    <>
      <div className="flex justify-between">
        <button>Back</button>
        <button onClick={showModal}>Add</button>
      </div>
      <div className="flex gap-8">
        <h3>{client.name}</h3>
        <button>Edit</button>
      </div>
      {modalisVisible && (
        <Modal onCloseModal={hideModal}>
          <NewVisitForm closeModal={hideModal} onAddVisit={onAddVisit} />
        </Modal>
      )}

      <ul>
        {visits.map((visit) => (
          <VisitCard visit={visit} key={visit.id} />
        ))}
      </ul>
    </>
  );
}
export default HistoryPage;
