import classes from "./ClientHistory.module.css";
import HistoryCard from "./HistoryCard";
import { FaPlus } from "react-icons/fa6";
import Modal from "./Modal";
import NewClientForm from "./NewClientForm";
import { useState } from "react";

import { IoIosArrowBack } from "react-icons/io";

function ClientHistory({ client, onCloseClient, onEditClient }) {
  const [modalisVisisble, setModalVisible] = useState(false);
  const [editingClient, setEditingClient] = useState(null);

  function showModalHandler() {
    setModalVisible(true);
  }
  function hideModalHandler() {
    setModalVisible(false);
  }
  return (
    <>
      <IoIosArrowBack 
        className={classes.back}
        onClick={onCloseClient}
      />
      {modalisVisisble && (
        <Modal onEditCard={showModalHandler}>
          <NewClientForm
            onCancel={hideModalHandler}
            onAddClient={(updatedData) => {
              onEditClient(updatedData);
              hideModalHandler();
            }}
            defaultData={editingClient}
            isEditing={true}
          />
        </Modal>
      )}
      

      <div className={classes.header}>
        <img
          src="/logo.png"
          alt=""
          className={classes.logo}
        />
        <div className={classes.clientInfo}>
          <h2>History of {client.name}</h2>
          <button>
            <FaPlus size={12} />
            Add
          </button>
        </div>
      </div>
      <li className={classes.list}>
        <h4> Total income: {client.total}€</h4>
        <HistoryCard
          client={client}
          onEditClient={(c) => {
            setEditingClient(c);
            showModalHandler();
          }}
        />
      </li>
    </>
  );
}
export default ClientHistory;
