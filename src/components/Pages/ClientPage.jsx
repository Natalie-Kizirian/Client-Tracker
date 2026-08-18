import ClientCard from "../Cards/ClientCard";
import NewClientForm from "../Forms/NewClientForm";
import Modal from "../Modal";
import { useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function ClientPage({ onAddClient, clients = [], onSelectClient }) {
  const [modalisVisible, setModalVisible] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const STATUSES = ["all", "new", "active", "inactive", "one-time"];

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
        <div className="flex flex-col justify-between gap-4 sm:flex-row">
          {/* SEARCH BAR */}
          <input
            type="text"
            placeholder="Search a client..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-surface w-full flex-1 rounded-xl border border-white p-2"
          />

          <button
            className="button-secondary"
            onClick={() => setModalVisible(true)}
          >
            + Add New Client
          </button>
        </div>

        {/* STATUS FILTERS */}
        <div className="[&::-webkit-scrollbar-thumb]:bg-body flex gap-1.5 overflow-x-scroll pb-2 [&::-webkit-scrollbar]:h-1 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent">
          {STATUSES.map((status) => (
            <p
              key={status}
              className={`flex-1 cursor-pointer rounded-md p-1.5 text-center text-sm whitespace-nowrap capitalize lg:text-lg ${selectedStatus === status ? "bg-surface font-semibold " : " bg-primary"}`}
              onClick={() => setSelectedStatus(status)}
            >
              {status} (
              {
                clients.filter((c) => status === "all" || c.status === status)
                  .length
              }
              )
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
          <div className="bg-surface mb-2 flex w-full items-center justify-between rounded-lg border border-white p-3">
            <h2 className="font-semibold lg:text-lg">
              Total Clients: {filteredClients.length}
            </h2>
            <h2 className="font-semibold lg:text-lg">
              Total Income: {totalIncome}€
            </h2>
          </div>

          <ul className="bg-surface flex flex-col gap-2 rounded-lg border-2 border-white p-4 drop-shadow-lg">
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
