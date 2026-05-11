function VisitCard({ visit }) {
  return (
    <>
      <div className="flex justify-between">
        <p className="w-full">
          {new Date(visit.date).toLocaleDateString("el-GR")}
        </p>
        <p className="w-full">{visit.service}</p>
        <p className="w-full">Price {visit.price}</p>
        <p className="w-full">Tips {visit.tips}</p>
        <p className="w-full">{visit.payment}</p>
        <p className="w-full">Total {visit.total}</p>
      </div>
    </>
  );
}
export default VisitCard;
