import ClientCard from "../Cards/ClientCard";
import NewClientForm from "../Forms/NewClientForm";
import Modal from "../Modal";
import { useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { getClientTotalIncome } from "../../utils";
import classes from "../Pages/clientPage.module.css";
import ContainerBackground from "../UI/container-bg";
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
  const totalIncome = filteredClients.reduce(
    (sum, client) => sum + getClientTotalIncome(client),
    0,
  );

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="flex flex-col gap-4">
      <div className="flex w-full flex-col gap-2">
        {/* ADD BUTTON */}
        <button
          className="secondary-button-md"
          onClick={() => setModalVisible(true)}
        >
          + Add New Client
        </button>

        {/* SEARCH BAR */}
        <input
          type="text"
          placeholder="Search a client..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={classes.search}
        />

        {/* STATUS FILTERS */}
        <div className="[&::-webkit-scrollbar-thumb]:bg-body flex gap-1.5 overflow-x-scroll pb-2 [&::-webkit-scrollbar]:h-1 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent">
          {STATUSES.map((status) => (
            <button
              key={status}
              className={`${classes.status} ${selectedStatus === status ? "bg-secondary " : " bg-surface"}`}
              onClick={() => setSelectedStatus(status)}
            >
              {status}
              {/* (
              {
                clients.filter((c) => status === "all" || c.status === status)
                  .length
              }
              ) */}
            </button>
          ))}
        </div>
        <h3 className={classes.total}>Total Income: {totalIncome}€</h3>
      </div>

      {/* Client Cards*/}
      {clients.length > 0 && (
        <div className="flex flex-col gap-2">
          <ContainerBackground>
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
          </ContainerBackground>
        </div>
      )}

      {/* Empty state */}
      {clients.length === 0 && (
        <div className="border-gold bg-body cursor-pointer rounded-md border px-2 text-center drop-shadow-lg lg:p-3">
          <h3>No clients yet.</h3> <br />
          <p>Add your first one and start building your client list!</p>
        </div>
      )}

      {/* Button to Top */}
      <button
        onClick={scrollToTop}
        className="fixed right-4 bottom-4 cursor-pointer rounded-2xl bg-white/70 p-2 text-xl lg:right-1/6"
      >
        <FaArrowUp />
      </button>

      {modalisVisible && (
        <Modal onCloseModal={hideModal}>
          <NewClientForm closeModal={hideModal} onAddClient={onAddClient} />
        </Modal>
      )}
    </div>
  );
}
export default ClientPage;
