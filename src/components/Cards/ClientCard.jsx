function ClientCard({ client }) {
    const totalIncome = client.visits.reduce((sum, visit) => sum + visit.total, 0);

  return (
    <>
      <h2>Name: {client.name}</h2>
      <p>Total Income: {totalIncome}$</p>
    </>
  );
}
export default ClientCard;
