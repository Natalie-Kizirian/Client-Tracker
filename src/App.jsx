import { useState } from "react";
import ClientPage from "./components/Pages/ClientPage";
import HistoryPage from "./components/Pages/HistoryPage";

function App() {
  const [clients, setClients] = useState([]);
  // const [visits, setVisits] = useState([]);
  const [selectedClient, setSelectedClient] = useState(null);

  function addClientHandler(clientData) {
    setClients((existingClients) => [clientData, ...existingClients]);
  }

  function addVisitHandler(visitData) {
    setClients((existingClients) =>
      existingClients.map((client) =>
        client.id === selectedClient.id
          ? {
              ...client,
              visits: [visitData, ...client.visits].sort(
                (a, b) => new Date(b.date) - new Date(a.date),
              ),
            }
          : client,
      ),
    );
  }
  function deleteVisitHandler(id) {
    setClients((existingClients) =>
      existingClients.map((client) =>
        client.id === selectedClient.id
          ? { ...client, visits: client.visits.filter((v) => v.id !== id) }
          : client,
      ),
    );
  }

  function deleteClientHandler(id) {
    setClients((existingClients) => existingClients.filter((c) => c.id !== id));
    setSelectedClient(null);
  }

  return (
    <>
      <h1>Client Tracker</h1>
      {!selectedClient && (
        <ClientPage
          onAddClient={addClientHandler}
          clients={clients}
          onSelectClient={setSelectedClient}
        />
      )}
      {selectedClient && (
        <HistoryPage
          //client={selectedClient}
          //visits={client.visits}
          onAddVisit={addVisitHandler}
          onClose={() => setSelectedClient(null)}
          onDeleteVisit={deleteVisitHandler}
          onDeleteClient={deleteClientHandler}
          client={clients.find((c) => c.id === selectedClient.id)}
        />
      )}
    </>
  );
}

export default App;
