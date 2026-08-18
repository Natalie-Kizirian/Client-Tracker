import { getClientTotalIncome } from "../../utils";
function ClientCard({ client, onSelectClient }) {
  const totalIncome = getClientTotalIncome(client);

  const totalVisits = client.visits.length;
  return (
    <>
      <li
        className="border-gold bg-body active:bg-primary cursor-pointer rounded-md border px-2 drop-shadow-lg lg:p-3"
        onClick={onSelectClient}
      >
        <h2 className="font-semibold capitalize lg:text-lg">{client.name}</h2>
        <p className="font-medium lg:text-lg">Total Income: {totalIncome}€</p>

        <p>Appointments: {totalVisits} </p>
      </li>
    </>
  );
}
export default ClientCard;
