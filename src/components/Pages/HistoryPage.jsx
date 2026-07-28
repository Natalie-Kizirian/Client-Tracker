import VisitCard from "../Cards/VisitCard";
import NewVisitForm from "../Forms/NewVisitForm";
import Modal from "../Modal";
import DeletePopUp from "../DeletePopUp";
import ClientCard from "../Cards/ClientCard";
import { useState } from "react";
import NewClientForm from "../Forms/NewClientForm";
import { IoChevronBackOutline } from "react-icons/io5";

function HistoryPage({
  client,
  onAddVisit,
  onClose,
  onDeleteVisit,
  onDeleteClient,
  onEditVisit,
  onEditClient,
}) {
  const [modalisVisible, setModalVisible] = useState(false);
  const [editingVisit, setEditingVisit] = useState(null);
  const [iseditingClient, setEditingClient] = useState(false);
  const [pendingAction, setPendingAction] = useState(null);

  function hideModal() {
    setModalVisible(false);
  }

  function showModal() {
    setModalVisible(true);
  }
  function deleteChoice() {}
  return (
    <>
      <div className="flex justify-between">
        <button className="cursor-pointer text-xl" onClick={onClose}>
          <IoChevronBackOutline />
        </button>
        <button
          onClick={() => {
            setEditingVisit(null);
            showModal();
          }}
          className="button-secondary"
        >
         + Add Appointment
        </button>
      </div>
      <div className="flex justify-between border-b-2 border-black">
        {/* EDIT CLIENT */}
        {iseditingClient ? (
          <Modal onCloseModal={() => setEditingClient(false)}>
            <NewClientForm
              defaultData={client}
              onAddClient={onEditClient}
              closeModal={() => setEditingClient(false)}
            />
          </Modal>
        ) : (
          <div className="flex flex-col justify-evenly">
            <h3 className="text-2xl font-semibold capitalize">{client.name}</h3>
            <h3 className="capitalize">{client.status} Client</h3>
          </div>
        )}

        <div className="mb-2 flex flex-col justify-end gap-3 sm:flex-row">
          <button
            className="cursor-pointer rounded-md bg-[#9DAC85] px-2 py-1 drop-shadow-lg"
            onClick={() => setEditingClient(true)}
          >
            Edit Client
          </button>
          <button
            className="cursor-pointer rounded-md bg-[#9DAC85] px-2 py-1 drop-shadow-lg"
            onClick={() =>
              setPendingAction(() => () => onDeleteClient(client.id))
            }
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
            onDeleteVisit={() =>
              setPendingAction(() => () => onDeleteVisit(visit.id))
            }
            onEditVisit={(visit) => {
              setEditingVisit(visit);
              showModal();
            }}
          />
        ))}
        {pendingAction && (
          <DeletePopUp
            onConfirm={() => {
              pendingAction(); // τρέχει ό,τι action είχε επιλεγεί
              setPendingAction(null); // κλείνει το popup
            }}
            onCancel={() => setPendingAction(null)}
          />
        )}
        {client.visits.length === 0 && (
          <div className="cursor-pointer rounded-md border border-[#b99a52] bg-[#BFC9B0] px-2 text-center drop-shadow-lg lg:p-3">
            <h3>No appointments yet.</h3> <br />
            <p>Add an appointment to start tracking {client.name}'s visits.</p>
          </div>
        )}
      </ul>
      {/* style={{ textAlign: "center", color: "black" , background:"red"}} */}
    </>
  );
}
export default HistoryPage;
