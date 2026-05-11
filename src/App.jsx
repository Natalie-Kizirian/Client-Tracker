import { useState } from "react";
import ClientPage from "./components/Pages/ClientPage";
import HistoryPage from "./components/Pages/HistoryPage";

function App() {
  const [clients, setClients] = useState([]);
  const [visits, setVisits] = useState([]);
  const [selectedClient, setSelectedClient] = useState(null);

  function addClientHandler(clientData) {
    setClients((existingClients) => [clientData, ...existingClients]);
  }

  function addVisitHandler(visitData) {
    setVisits((existingVisits) =>
      [visitData, ...existingVisits].sort(
        (a, b) => new Date(b.date) - new Date(a.date),
      ),
    );
  }
  function deleteVisitHandler(id) {
    setVisits((existingVisits) => existingVisits.filter((v) => v.id !== id));
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
          client={selectedClient}
          visits={visits}
          onAddVisit={addVisitHandler}
          onClose={() => setSelectedClient(null)}
          onDeleteVisit={deleteVisitHandler}
          onDeleteClient={deleteClientHandler}
        />
      )}
    </>
  );
}

export default App;
