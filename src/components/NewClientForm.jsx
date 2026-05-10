import classes from "./NewClientForm.module.css";
import { useState } from "react";
function NewClientForm({ onCancel, onAddClient, defaultData = null , isEditing }) {
  //States
  const [enteredName, setEnteredName] = useState(defaultData?.name || "");
  const [enteredService, setEnteredService] = useState(
    defaultData?.service || "",
  );
  const [enteredPrice, setEnteredPrice] = useState(defaultData?.price || "");
  const [enteredTips, setEnteredTips] = useState(defaultData?.tips || 0);
  const [selectedPayMethod, setPayMethod] = useState(
    defaultData?.payment || "Cash",
  );
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(
    defaultData?.date || new Date().toISOString().split("T")[0],
  );

  // Functions

  function sumbitHandler(event) {
    event.preventDefault();
    const clientData = {
      id: defaultData?.id || crypto.randomUUID(),
      name: enteredName,
      service: enteredService,
      price: enteredPrice,
      tips: enteredTips,
      payment: selectedPayMethod,
      date: selectedDate,
      total: Number(enteredPrice) + Number(enteredTips),
    };
    onAddClient(clientData);
    onCancel();
  }
  return (
    <form
      className={classes.form}
      onSubmit={sumbitHandler}
    >
      <p>
        <label htmlFor="name"> Name</label>
        <input
          required
          onChange={(e) => setEnteredName(e.target.value)}
          value={enteredName}
          type="text"
          id="name"
        />
      </p>
      <p>
        <label htmlFor="service"> Service</label>
        <input
          onChange={(e) => setEnteredService(e.target.value)}
          type="text"
          id="service"
          value={enteredService}
        />
      </p>
      <p>
        <label htmlFor="price"> Price</label>
        <input
          onChange={(e) => setEnteredPrice(e.target.value)}
          type="number"
          id="price"
          step="0.01"
          value={enteredPrice}
        />
      </p>
      <p>
        <label htmlFor="tips"> Tips</label>
        <input
          onChange={(e) => setEnteredTips(e.target.value)}
          type="number"
          id="tips"
          step="0.01"
          value={enteredTips}
        />
      </p>
      <input
        type="date"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
      />
      <p>
        <label> Payment Method</label>
        <select onChange={(e) => setPayMethod(e.target.value)}>
          <option value="Cash">Cash</option>
          <option value="Card">Card</option>
        </select>
      </p>
      <div className={classes.actions}>
        <button
          className={classes.cancel}
          onClick={onCancel}
          type="button"
        >
          Cancel
        </button>
        <button
          className={classes.addbtn}
          type="submit" 
        >
          {isEditing ? "Save" : "Add"}
        </button>
      </div>
    </form>
  );
}
export default NewClientForm;
