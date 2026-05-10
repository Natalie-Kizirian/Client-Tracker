import ClientPage from "./components/ClientPage";
import ClientHistory from "./components/ClientHistory";
import { useState } from "react";
function App() {
  const [selectedClient, setSelectedClient] = useState(null);
  const [clients, setClients] = useState([]);

  function addClientsHandler(clientData) {
    // If the new state depends on the old state I should write it like this to update the state
    setClients((existingClients) => [clientData, ...existingClients]);
    /* setClients([clientData , ...clients])*/
  }

  function editClientHandler(updatedClient) {
    setClients((existingClients) =>
      existingClients.map((client) =>
        client.id === updatedClient.id ? updatedClient : client,
      ),
    );
    setSelectedClient(updatedClient);
  }

  return (
    <>
      {!selectedClient && (
        <ClientPage
          onSelectClient={setSelectedClient}
          clients={clients}
          onAddClient={addClientsHandler}
        />
      )}

      {selectedClient && (
        <ClientHistory
          client={selectedClient}
          onCloseClient={() => setSelectedClient(null)}
          onEditClient={editClientHandler}
        />
      )}
    </>
  );
}

export default App;
