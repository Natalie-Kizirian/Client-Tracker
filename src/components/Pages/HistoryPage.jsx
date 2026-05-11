import VisitCard from "../Cards/VisitCard";
import NewVisitForm from "../Forms/NewVisitForm";
import Modal from "../Modal";
import { useState } from "react";

function HistoryPage({
  client,
  visits,
  onAddVisit,
  onClose,
  onDeleteVisit,
  onDeleteClient,
}) {
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
        <button onClick={onClose}>Back</button>
        <button onClick={showModal}>Add</button>
      </div>
      <div className="flex gap-8">
        <h3>{client.name}</h3>
        <button>Edit</button>
        <button onClick={() => onDeleteClient(client.id)}>Delete Client</button>
      </div>
      {modalisVisible && (
        <Modal onCloseModal={hideModal}>
          <NewVisitForm closeModal={hideModal} onAddVisit={onAddVisit} />
        </Modal>
      )}

      <ul>
        {client.visits.map((visit) => (
          <VisitCard
            visit={visit}
            key={visit.id}
            onDeleteVisit={() => onDeleteVisit(visit.id)}
          />
        ))}
      </ul>
    </>
  );
}
export default HistoryPage;
