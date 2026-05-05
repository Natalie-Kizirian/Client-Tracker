import ClientList from "./ClientList";
import MainHeader from "./MainHeader";
import { useState } from "react";

function ClientPage({ onSelectClient, clients, onAddClient }) {
  const [modalisVisisble, setModalVisible] = useState(false);

  function showModalHandler() {
    setModalVisible(true);
  }
  function hideModalHandler() {
    setModalVisible(false);
  }

  return (
    <>
      <MainHeader onCreateNewClient={showModalHandler} />
      <main>
        <ClientList //
          isModalOpen={modalisVisisble}
          onModalClose={hideModalHandler}
          onSelectClient={onSelectClient}
          clients={clients}
          onAddClient={onAddClient} //
        />
      </main>
    </>
  );
}
export default ClientPage;
