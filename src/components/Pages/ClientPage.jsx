import ClientCard from "../Cards/ClientCard";
import NewClientForm from "../Forms/NewClientForm";
import Modal from "../Modal";
import { useState } from "react";
function ClientPage({ onAddClient, clients, onSelectClient }) {
  const [modalisVisible, setModalVisible] = useState(false);

  function hideModal() {
    setModalVisible(false);
  }
  return (
    <>
      <div className="flex justify-between">
        <h3 className="text-2xl">Clients</h3>

        <button
          className="button-primary"
          onClick={() => setModalVisible(true)}
        >
          Add New Client
        </button>
      </div>

      {modalisVisible && (
        <Modal onCloseModal={hideModal}>
          <NewClientForm closeModal={hideModal} onAddClient={onAddClient} />
        </Modal>
      )}

      {clients.length > 0 && (
        <ul className="flex flex-col gap-2 rounded-lg border border-2 border-white bg-[#D3DAC8] p-4 drop-shadow-lg">
          {clients.map((client) => (
            <ClientCard
              key={client.id}
              client={client}
              onSelectClient={() => onSelectClient(client)}
            />
          ))}
        </ul>
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
