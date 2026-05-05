import classes from "./ClientHistory.module.css";
import HistoryCard from "./HistoryCard";
import { IoIosArrowBack } from "react-icons/io";

function ClientHistory({ client, onCloseClient }) {
  return (
    <>
      <IoIosArrowBack className={classes.back} onClick={onCloseClient} />

      <div className={classes.header}>
        <img src="/logo.png" alt="" className={classes.logo} />
        <h2>History of {client.name}</h2>
      </div>
      <li className={classes.list}>
        <h4> Total income: {client.total}€</h4>
        <HistoryCard client={client} />
        <HistoryCard client={client} />
        <HistoryCard client={client} />
      </li>
    </>
  );
}
export default ClientHistory;
