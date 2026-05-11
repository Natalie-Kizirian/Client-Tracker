import { useState } from "react";

function NewVisitForm({
  onAddVisit,
  closeModal,
  defaultData = null,
  onEditVisit,
}) {
  const [enteredService, setEnteredService] = useState(
    defaultData?.service || "",
  );
  const [enteredPrice, setEnteredPrice] = useState(defaultData?.price || "");
  const [enteredTips, setEnteredTips] = useState(defaultData?.tips || "");
  const [enteredPayment, setEnteredPayment] = useState(
    defaultData?.payment || "Cash",
  );
  const [enteredDate, setEnteredDate] = useState(
    defaultData?.date || new Date().toISOString().split("T")[0],
  );
  function submitHandler(e) {
    e.preventDefault();
    const visitData = {
      id: defaultData?.id || crypto.randomUUID(),
      service: enteredService,
      price: enteredPrice,
      tips: enteredTips,
      payment: enteredPayment,
      date: enteredDate,
      total: Number(enteredPrice) + Number(enteredTips),
    };

    if (defaultData) {
      onEditVisit(visitData);
    } else {
      onAddVisit(visitData);
    }
    closeModal();
    console.log(visitData);
  }
  return (
    <>
      <form onSubmit={submitHandler}>
        <label htmlFor="date">Date</label>
        <input
          type="date"
          name=""
          id="date"
          value={enteredDate}
          onChange={(e) => setEnteredDate(e.target.value)}
        />
        <label htmlFor="service">Service</label>
        <input
          type="text"
          name=""
          id="service"
          value={enteredService}
          onChange={(e) => setEnteredService(e.target.value)}
        />
        <label htmlFor="price">Price</label>
        <input
          type="number"
          name=""
          id="price"
          value={enteredPrice}
          onChange={(e) => setEnteredPrice(e.target.value)}
        />
        <label htmlFor="tips">Tips</label>
        <input
          type="number"
          name=""
          id="tips"
          value={enteredTips}
          onChange={(e) => setEnteredTips(e.target.value)}
        />
        <p>
          <label> Payment Method</label>
          <select onChange={(e) => setEnteredPayment(e.target.value)}>
            <option value="Cash">Cash</option>
            <option value="Card">Card</option>
          </select>
        </p>
        <div>
          <button type="button" onClick={closeModal}>
            Cancel
          </button>
          <button type="submit">Add</button>
        </div>
      </form>
    </>
  );
}
export default NewVisitForm;
