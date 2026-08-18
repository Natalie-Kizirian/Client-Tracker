import VisitCard from "../Cards/VisitCard";
import NewVisitForm from "../Forms/NewVisitForm";
import Modal from "../Modal";
import DeletePopUp from "../DeletePopUp";
import { useState } from "react";
import NewClientForm from "../Forms/NewClientForm";
import { IoChevronBackOutline } from "react-icons/io5";
import { getClientTotalIncome } from "../../utils";

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
  const totalIncome = getClientTotalIncome(client);

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
      <div className="flex flex-col justify-between border-b-2 border-black">
        <div className="mb-2 flex flex-col justify-between gap-2">
          {/* 1st row */}
          <div className="flex justify-between">
            <h3 className="text-2xl font-semibold capitalize">{client.name}</h3>
            <button
              className="bg-primary cursor-pointer rounded-md px-2 py-1 drop-shadow-lg"
              onClick={() => setEditingClient(true)}
            >
              Edit Client
            </button>{" "}
          </div>

          <div>
            {iseditingClient ? (
              <Modal onCloseModal={() => setEditingClient(false)}>
                <NewClientForm
                  defaultData={client}
                  onAddClient={onEditClient}
                  closeModal={() => setEditingClient(false)}
                  onDeleteClient={() =>
                    setPendingAction(() => () => onDeleteClient(client.id))
                  }
                />
              </Modal>
            ) : (
              <div className="flex flex-col gap-3">
                <div className="flex justify-between">
                  <p className="font-semibold">Total Income: {totalIncome}€</p>
                  <h3 className="capitalize">{client.status} Client</h3>
                </div>

                {client.note ? (
                  <p className="bg-surface/60 rounded-lg p-2 wrap-break-word capitalize">
                    {client.note}
                  </p>
                ) : (
                  ""
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {modalisVisible && (
        <Modal onCloseModal={hideModal}>
          <NewVisitForm
            closeModal={hideModal}
            onAddVisit={onAddVisit}
            onEditVisit={onEditVisit}
            defaultData={editingVisit}
            onDeleteClient={() =>
              setPendingAction(() => onDeleteClient(client.id))
            }
          />
        </Modal>
      )}
      <ul className="flex flex-col gap-2">
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
          <div className="border-gold bg-body cursor-pointer rounded-md border px-2 text-center drop-shadow-lg lg:p-3">
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
