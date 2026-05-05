import classes from "./NewClientForm.module.css";
import { useState } from "react";
function NewClientForm({ onCancel, onAddClient }) {
  //States
  const [enteredName, setEnteredName] = useState("");
  const [enteredService, setEnteredService] = useState("");
  const [enteredPrice, setEnteredPrice] = useState(0);
  const [enteredTips, setEnteredTips] = useState(0);
  const [selectedPayMethod, setPayMethod] = useState("Cash");
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0]);

  // Functions

  function sumbitHandler(event) {
    event.preventDefault();
    const clientData = {
      id: crypto.randomUUID(),
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
    <form className={classes.form} onSubmit={sumbitHandler}>
      <p>
        <label htmlFor="name"> Name</label>
        <input required onChange={(e) => setEnteredName(e.target.value)} type="text" id="name" />
      </p>
      <p>
        <label htmlFor="service"> Service</label>
        <input onChange={(e) => setEnteredService(e.target.value)} type="text" id="service" />
      </p>
      <p>
        <label htmlFor="price"> Price</label>
        <input onChange={(e) => setEnteredPrice(e.target.value)} type="number" id="price" step="0.01" />
      </p>
      <p>
        <label htmlFor="tips"> Tips</label>
        <input onChange={(e) => setEnteredTips(e.target.value)} type="number" id="tips" step="0.01" />
      </p>
      <input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />
      <p>
        <label> Payment Method</label>
        <select onChange={(e) => setPayMethod(e.target.value)}>
          <option value="Cash">Cash</option>
          <option value="Card">Card</option>
        </select>
      </p>
      <div className={classes.actions}>
        <button className={classes.cancel} onClick={onCancel} type="button">
          Cancel
        </button>
        <button className={classes.addbtn} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
export default NewClientForm;
