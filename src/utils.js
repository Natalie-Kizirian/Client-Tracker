export function getClientTotalIncome(client) {
  return client.visits.reduce((sum, visit) => sum + Number(visit.total), 0);
}
