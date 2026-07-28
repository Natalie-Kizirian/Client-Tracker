import ClientCard from "../Cards/ClientCard";
import NewClientForm from "../Forms/NewClientForm";
import Modal from "../Modal";
import { useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function ClientPage({ onAddClient, clients = [], onSelectClient }) {
  const [modalisVisible, setModalVisible] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const STATUSES = ["all", "new", "active", "one-time", "inactive"];

  const filteredClients =
    selectedStatus === "all"
      ? clients
      : clients.filter((s) => s.status === selectedStatus);

  // Search Bar
  const searchedClients = searchQuery
    ? filteredClients.filter((c) =>
        c.name.toLowerCase().startsWith(searchQuery.toLowerCase()),
      )
    : filteredClients;

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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="flex flex-col gap-3">
        <div className="flex justify-between">
          <span></span>

          <button
            className="button-secondary text-center"
            onClick={() => setModalVisible(true)}
          >
           + Add New Client
          </button>
        </div>
        {/* SEARCH BAR */}
        <input
          type="text"
          placeholder="Search a client..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="bg-secondary w-full rounded-xl border border-white p-2"
        />

        {/* STATUS FILTERS */}
        <div className="flex w-full justify-between">
          {STATUSES.map((status) => (
            <p
              key={status}
              className={`cursor-pointer rounded-md px-1.5 capitalize lg:px-10 lg:text-lg ${selectedStatus === status ? "bg-secondary font-semibold " : " bg-primary"}`}
              onClick={() => setSelectedStatus(status)}
            >
              {status}
            </p>
          ))}
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
            <h2 className="text-md w-1/2 text-center font-semibold lg:text-lg">
              Total Clients <br /> {filteredClients.length}
            </h2>
            <h2 className="text-md w-1/2 text-center font-semibold lg:text-lg">
              Total Income <br /> {totalIncome}€
            </h2>
          </div>

          <ul className="flex flex-col gap-2 rounded-lg border-2 border-white bg-[#D3DAC8] p-4 drop-shadow-lg">
            {searchedClients.map((client) => (
              <ClientCard
                key={client.id}
                client={client}
                onSelectClient={() => onSelectClient(client)}
              />
            ))}{" "}
            {filteredClients.length === 0 && (
              <h3 className="text-center">No clients here 👀</h3>
            )}
          </ul>
        </div>
      )}

      {clients.length === 0 && (
        <div className="cursor-pointer rounded-md border border-[#b99a52] bg-[#BFC9B0] px-2 text-center drop-shadow-lg lg:p-3">
          <h3>No clients yet.</h3> <br />
          <p>Add your first one and start building your client list!</p>
        </div>
      )}
      <button
        onClick={scrollToTop}
        className="fixed right-4 bottom-4 cursor-pointer rounded-2xl bg-white/70 p-2 text-xl lg:right-1/6"
      >
        <FaArrowUp />
      </button>
    </>
  );
}
export default ClientPage;
