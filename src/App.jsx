import { useState } from "react";
import ClientPage from "./components/Pages/ClientPage";

function App() {
  const [clients, setClients] = useState([]);

  function addClientHandler(clientData) {
    setClients((existingClients) => [clientData, ...existingClients]);
  }
  return (
    <>
      <h1>Client Tracker</h1>
      <ClientPage onAddClient={addClientHandler} clients={clients} />
    </>
  );
}

export default App;
