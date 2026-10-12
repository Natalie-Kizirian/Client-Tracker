import { useState } from "react";
const inputStyles =
  "rounded-md bg-surface p-2 shadow-inset-black focus:outline-none";
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
      <h2 className=" text-lg font-semibold">
        Add a new Appointment
      </h2>
      <form
        className="flex w-full flex-col gap-2 md:m-auto"
        onSubmit={submitHandler}
      >
        {/* Date */}
        <div>
          <label htmlFor="date">Date</label>
          <input
            className="bg-surface w-full rounded-md p-2 focus:outline-none"
            type="date"
            name=""
            id="date"
            value={enteredDate}
            onChange={(e) => setEnteredDate(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="mt-2" htmlFor="service">
            Service
          </label>
          <input
            required
            className={inputStyles}
            type="text"
            name=""
            id="service"
            value={enteredService}
            onChange={(e) => setEnteredService(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="" htmlFor="price">
            Price
          </label>
          <input
            className={inputStyles}
            type="number"
            name=""
            id="price"
            value={enteredPrice}
            onChange={(e) => setEnteredPrice(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="" htmlFor="tips">
            Tips
          </label>
          <input
            className={inputStyles}
            type="number"
            name=""
            id="tips"
            value={enteredTips}
            onChange={(e) => setEnteredTips(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label> Payment Method</label>
          <select
            className="bg-background rounded-md p-2 focus:outline-none"
            onChange={(e) => setEnteredPayment(e.target.value)}
          >
            <option value="Cash">Cash</option>
            <option value="Card">Card</option>
          </select>
        </div>
        <div className="flex w-full justify-between gap-5">
          <button
            type="button"
            onClick={closeModal}
            className="stroke-button-md w-full"
          >
            Cancel
          </button>
          <button className="primary-button-md w-full" type="submit">
            {defaultData ? "Save" : "Add"}
          </button>
        </div>
      </form>
    </>
  );
}
export default NewVisitForm;
