import VisitCard from "../Cards/VisitCard";
import NewVisitForm from "../Forms/NewVisitForm";
import Modal from "../Modal";
import DeletePopUp from "../DeletePopUp";
import { useState } from "react";
import NewClientForm from "../Forms/NewClientForm";
import { IoChevronBackOutline } from "react-icons/io5";
import { getClientTotalIncome } from "../../utils";
import ContainerBackground from "../UI/container-bg";

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
    <div className="flex flex-1 flex-col items-center  gap-4">
      <div className="flex w-full items-center justify-between text-black">
        <button className="cursor-pointer text-xl" onClick={onClose}>
          <IoChevronBackOutline />
        </button>
        <button
          onClick={() => {
            setEditingVisit(null);
            showModal();
          }}
          className="secondary-button-md"
        >
          + Add Appointment
        </button>
      </div>

      <div className="flex w-full flex-col gap-2">
        {/* 1st row */}
        <div className="flex w-full items-center justify-between">
          <h3 className="text-xl font-semibold capitalize">{client.name}</h3>
          <button
            className="bg-surface cursor-pointer rounded-md px-3 py-2 shadow-sm"
            onClick={() => setEditingClient(true)}
          >
            Edit Client
          </button>
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
              {client.note ? (
                <p className="bg-surface border-secondary text-primary h-17 rounded-sm border p-2 text-sm wrap-break-word capitalize">
                  {client.note}
                </p>
              ) : (
                ""
              )}
              <div className="bg-surface flex justify-between rounded-lg border border-white px-1.5 py-2">
                <p>Total Income: {totalIncome}€</p>
                <h3 className="text-primary capitalize">
                  {client.status} Client
                </h3>
              </div>
            </div>
          )}
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

      <ContainerBackground>
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
            <div className="bg-body cursor-pointer rounded-md border px-2 text-center drop-shadow-lg lg:p-3">
              <h3>No appointments yet.</h3> <br />
              <p>
                Add an appointment to start tracking {client.name}'s visits.
              </p>
            </div>
          )}
        </ul>
      </ContainerBackground>

      {/* style={{ textAlign: "center", color: "black" , background:"red"}} */}
    </div>
  );
}
export default HistoryPage;
