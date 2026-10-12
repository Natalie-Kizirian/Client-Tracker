import { getClientTotalIncome } from "../../utils";
function ClientCard({ client, onSelectClient }) {
  const totalIncome = getClientTotalIncome(client);

  const totalVisits = client.visits.length;
  return (
    <>
      <li
        //className=" active:bg-primary cursor-pointer rounded-md border px-2 drop-shadow-lg lg:p-3"
        className="bg-surface border-background flex flex-col gap-1 rounded-xl border p-2 shadow-sm"
        onClick={onSelectClient}
      >
        <p className="font-semibold capitalize lg:text-lg">{client.name}</p>
        <p className="font-medium lg:text-lg">Total Income: {totalIncome}€</p>

        <p>Appointments: {totalVisits} </p>
      </li>
    </>
  );
}
export default ClientCard;
