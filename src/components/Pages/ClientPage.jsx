import ClientCard from "../Cards/ClientCard";
import NewClientForm from "../Forms/NewClientForm";
import Modal from "../Modal";
import { useState } from "react";
function ClientPage({ onAddClient, clients }) {
  const [modalisVisible, setModalVisible] = useState(false);

  function hideModal() {
    setModalVisible(false);
  }
  return (
    <>
      <div className="flex justify-between">
        <h3>Clients</h3>

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

      <ul>
        {clients.map((client) => (
          <ClientCard key={client.id} client={client} />
        ))}
      </ul>
    </>
  );
}
export default ClientPage;
