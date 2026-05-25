function ClientCard({ client, onSelectClient }) {
  const totalIncome = client.visits.reduce(
    (sum, visit) => sum + visit.total,
    0,
  );

  const totalVisits = client.visits.length;
  return (
    <>
      <li
        className="flex cursor-pointer justify-between rounded-md border border-[#b99a52] bg-[#BFC9B0] px-2 drop-shadow-lg lg:p-3"
        onClick={onSelectClient}
      >
        <div>
          <h2 className="font-semibold capitalize lg:text-lg">
            Name: {client.name}
          </h2>
          <p className="font-medium lg:text-lg">Total Income: {totalIncome}$</p>
        </div>
        <p>Total Appointments: {totalVisits} </p>
      </li>
    </>
  );
}
export default ClientCard;
