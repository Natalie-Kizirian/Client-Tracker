import classes from "./ClientInfo.module.css";

function ClientInfo({ name, total , onClickClient }) {
  return (
    <li className={classes.clientCard} onClick={onClickClient}>
      <p>
        Name: <strong>{name}</strong>
      </p>
      <p>
        Total Income: <strong>{total}€</strong>
      </p>
    </li>
  );
}
export default ClientInfo;
