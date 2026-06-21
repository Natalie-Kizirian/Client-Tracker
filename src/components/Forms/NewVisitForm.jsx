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
      <form
        className="flex w-full flex-col justify-evenly md:m-auto"
        onSubmit={submitHandler}
      >
        <label htmlFor="date">Date</label>
        <input
          className="w-full rounded-md bg-[#D3DAC8] p-1"
          type="date"
          name=""
          id="date"
          value={enteredDate}
          onChange={(e) => setEnteredDate(e.target.value)}
        />
        <label className="mt-2" htmlFor="service">
          Service
        </label>
        <input
          className="rounded-md bg-[#D3DAC8] p-1"
          type="text"
          name=""
          id="service"
          value={enteredService}
          onChange={(e) => setEnteredService(e.target.value)}
        />
        <label className="mt-2" htmlFor="price">
          Price
        </label>
        <input
          className="rounded-md bg-[#D3DAC8] p-1"
          type="number"
          name=""
          id="price"
          value={enteredPrice}
          onChange={(e) => setEnteredPrice(e.target.value)}
        />
        <label className="mt-2" htmlFor="tips">
          Tips
        </label>
        <input
          className="rounded-md bg-[#D3DAC8] p-1"
          type="number"
          name=""
          id="tips"
          value={enteredTips}
          onChange={(e) => setEnteredTips(e.target.value)}
        />
        <p className="mt-2 flex flex-col">
          <label> Payment Method</label>
          <select
            className="rounded-md bg-[#D3DAC8] p-1"
            onChange={(e) => setEnteredPayment(e.target.value)}
          >
            <option value="Cash">Cash</option>
            <option value="Card">Card</option>
          </select>
        </p>
        <div className="mt-5 flex w-full justify-end gap-4">
          <button type="button" onClick={closeModal}>
            Cancel
          </button>
          <button className="button-primary" type="submit">
            Add
          </button>
        </div>
      </form>
    </>
  );
}
export default NewVisitForm;
