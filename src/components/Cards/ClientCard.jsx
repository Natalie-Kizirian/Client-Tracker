import { getClientTotalIncome } from "../../utils";
function ClientCard({ client, onSelectClient }) {
  const totalIncome = getClientTotalIncome(client);

  const totalVisits = client.visits.length;
  return (
    <>
      <div
        className="bg-surface border-background flex cursor-pointer flex-col gap-1 rounded-xl border p-2 shadow-sm"
        onClick={onSelectClient}
      >
        <p className="font-semibold capitalize lg:text-lg">{client.name}</p>
        <p className="font-medium lg:text-lg">Total Income: {totalIncome}€</p>

        <p>Appointments: {totalVisits} </p>
      </div>
    </>
  );
}
export default ClientCard;
