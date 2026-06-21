import ClientCard from "../Cards/ClientCard";
import NewClientForm from "../Forms/NewClientForm";
import Modal from "../Modal";
import { useState } from "react";
function ClientPage({ onAddClient, clients, onSelectClient }) {
  const [modalisVisible, setModalVisible] = useState(false);

  function hideModal() {
    setModalVisible(false);
  }

  /* Total Income */
  const totalIncome = clients.reduce((sum, client) => {
    const clientTotal = client.visits.reduce(
      (s, visit) => s + Number(visit.total),
      0,
    );
    return sum + clientTotal;
  }, 0);

  return (
    <>
      <div className="flex justify-between">
        <h3 className="text-2xl">Clients</h3>

        <div className="flex gap-2">
          <button
            className="button-secondary"
            onClick={() => setModalVisible(true)}
          >
            Add New Client
          </button>
        </div>
      </div>

      {modalisVisible && (
        <Modal onCloseModal={hideModal}>
          <NewClientForm closeModal={hideModal} onAddClient={onAddClient} />
        </Modal>
      )}

      {clients.length > 0 && (
        <div>
          <div className="my-2 flex w-full justify-between rounded-lg border border-white bg-[#D3DAC8]">
            <h2 className="text-md w-1/2  lg:text-lg text-center font-semibold">
              Total Clients <br /> {clients.length}
            </h2>
            <h2 className="text-md w-1/2 lg:text-lg text-center font-semibold ">
              Total Income <br /> {totalIncome}€
            </h2>
          </div>

          <ul className="flex flex-col gap-2 rounded-lg border-2 border-white bg-[#D3DAC8] p-4 drop-shadow-lg">
            {clients.map((client) => (
              <ClientCard
                key={client.id}
                client={client}
                onSelectClient={() => onSelectClient(client)}
              />
            ))}
          </ul>
        </div>
      )}

      {clients.length === 0 && (
        <div style={{ textAlign: "center", color: "black" }}>
          <h3>No clients yet.</h3> <br />
          <p>Add your first one and start building your client list!</p>
        </div>
      )}
    </>
  );
}
export default ClientPage;
