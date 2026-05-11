function ClientCard({ client, onSelectClient }) {
  const totalIncome = client.visits.reduce(
    (sum, visit) => sum + visit.total,
    0,
  );

  return (
    <>
      <li onClick={onSelectClient}>
        <h2>Name: {client.name}</h2>
        <p>Total Income: {totalIncome}$</p>
      </li>
    </>
  );
}
export default ClientCard;
