import classes from "./HistoryCard.module.css";
import { MdModeEditOutline } from "react-icons/md";
import { CiCalendar } from "react-icons/ci";
import { useState } from "react";

function HistoryCard({ client , onEditClient }) {
  const [editingClient, setEditingClient] = useState(null);



  return (
    <div className={classes.wrapper}>
      <div className={classes.cardHeader}>
        <p>{client.service}</p>
        <MdModeEditOutline onClick={() => onEditClient(client)} />
      </div>
      <div className={classes.mainInfo}>
        <p>
          {client.date}
          <CiCalendar style={{ margin: " 0px 4px", fontSize: "1.5rem" }} />
        </p>
        <p>{client.price}€</p>
        <p> {client.tips}€</p>
        <p> {client.payment}</p>
      </div>

      <p>
        <strong>Total Amount: {client.total}€</strong>{" "}
      </p>
    </div>
  );
}
export default HistoryCard;
