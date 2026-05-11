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
  onEditVisit,
  onEditName,
}) {
  const [modalisVisible, setModalVisible] = useState(false);
  const [editingVisit, setEditingVisit] = useState(null);
  const [iseditingName, setEditingName] = useState(false);

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
        <button
          onClick={() => {
            setEditingVisit(null);
            showModal();
          }}
        >
          Add
        </button>
      </div>
      {iseditingName ? (
        <input
          defaultValue={client.name}
          className="rounded border-2 border-black px-2 "
          onBlur={(e) => {
            onEditName(client.id, e.target.value);
            setEditingName(false);
          }}
        />
      ) : (
        <h3 className="m-6">{client.name}</h3>
      )}

      <div className="flex gap-8">
        {/* <h3>{client.name}</h3> */}
        <button onClick={() => setEditingName(true)}>Edit Name</button>
        <button onClick={() => onDeleteClient(client.id)}>Delete Client</button>
      </div>
      {modalisVisible && (
        <Modal onCloseModal={hideModal}>
          <NewVisitForm
            closeModal={hideModal}
            onAddVisit={onAddVisit}
            onEditVisit={onEditVisit}
            defaultData={editingVisit}
          />
        </Modal>
      )}
      <ul>
        {client.visits.map((visit) => (
          <VisitCard
            visit={visit}
            key={visit.id}
            onDeleteVisit={() => onDeleteVisit(visit.id)}
            onEditVisit={(visit) => {
              setEditingVisit(visit);
              showModal();
            }}
          />
        ))}
      </ul>
    </>
  );
}
export default HistoryPage;
