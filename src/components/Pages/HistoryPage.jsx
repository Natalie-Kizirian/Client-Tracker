import VisitCard from "../Cards/VisitCard";
import NewVisitForm from "../Forms/NewVisitForm";
import Modal from "../Modal";
import DeletePopUp from "../DeletePopUp";
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
        <button className="cursor-pointer" onClick={onClose}>
          Back
        </button>
        <button
          onClick={() => {
            setEditingVisit(null);
            showModal();
          }}
          className="button-primary"
        >
          Add Appointment
        </button>
      </div>
      <div className="flex justify-between border-b-2 border-black">
        {iseditingName ? (
          <input
            defaultValue={client.name}
            className="rounded border-2 border-black px-2"
            onBlur={(e) => {
              onEditName(client.id, e.target.value);
              setEditingName(false);
            }}
          />
        ) : (
          <h3 className="text-2xl font-semibold capitalize">{client.name}</h3>
        )}

        <div className="mb-2 flex flex-col justify-end gap-3 sm:flex-row">
          <button
            className="cursor-pointer rounded-md bg-[#9DAC85] px-2 py-1 drop-shadow-lg"
            onClick={() => setEditingName(true)}
          >
            Edit Name
          </button>
          <button
            className="cursor-pointer rounded-md bg-[#9DAC85] px-2 py-1 drop-shadow-lg"
            onClick={() => onDeleteClient(client.id)}
          >
            Delete Client{" "}
          </button>
        </div>
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
      <ul className="flex flex-col gap-5">
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
      <DeletePopUp/>
    </>
  );
}
export default HistoryPage;
