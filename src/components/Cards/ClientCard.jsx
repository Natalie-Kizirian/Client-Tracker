function ClientCard({ client, onSelectClient }) {
  const totalIncome = client.visits.reduce(
    (sum, visit) => sum + visit.total,
    0,
  );

  return (
    <>
      <li
        className="cursor-pointer rounded-md border border-[#b99a52] bg-[#BFC9B0] px-2 drop-shadow-lg lg:p-3"
        onClick={onSelectClient}
      >
        <h2 className="font-semibold lg:text-lg">Name: {client.name}</h2>
        <p className="font-medium lg:text-lg">Total Income: {totalIncome}$</p>
      </li>
    </>
  );
}
export default ClientCard;
