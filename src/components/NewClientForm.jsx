import classes from "./NewClientForm.module.css";
import { useState } from "react";
function NewClientForm({ onCancel, onAddClient }) {
  //States
  const [enteredName, setEnteredName] = useState("");
  const [enteredService, setEnteredService] = useState("");
  const [enteredPrice, setEnteredPrice] = useState(0);
  const [enteredTips, setEnteredTips] = useState(0);
  const [selectedPayMethod, setPayMethod] = useState("Cash");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0]);

  // Functions
  function nameChangeHandler(event) {
    setEnteredName(event.target.value);
  }
  function serviceChangeHandler(event) {
    setEnteredService(event.target.value);
  }
  function priceChangeHandler(event) {
    setEnteredPrice(event.target.value);
  }
  function tipsChangeHandler(event) {
    setEnteredTips(event.target.value);
  }
  function payMethodHandler(method) {
    setPayMethod(method);
    setIsDropdownOpen(false);
  }
  function dateChangeHandler(event) {
    setSelectedDate(event.target.value);
  }
  function sumbitHandler(event) {
    event.preventDefault();
    const clientData = {
      id: crypto.randomUUID(),
      name: enteredName,
      service: enteredService,
      price: enteredPrice,
      tips: enteredTips,
      payment: selectedPayMethod,
      total: Number(enteredPrice) + Number(enteredTips),
    };
    onAddClient(clientData);
    onCancel();
  }
  return (
    <form className={classes.form} onSubmit={sumbitHandler}>
      <p>
        <label htmlFor="name"> Name</label>
        <input required onChange={nameChangeHandler} type="text" id="name" />
      </p>
      <p>
        <label htmlFor="service"> Service</label>
        <input onChange={serviceChangeHandler} type="text" id="service" />
      </p>
      <p>
        <label htmlFor="price"> Price</label>
        <input onChange={priceChangeHandler} type="number" id="price" step="0.01" />
      </p>
      <p>
        <label htmlFor="tips"> Tips</label>
        <input onChange={tipsChangeHandler} type="number" id="tips" step="0.01" />
      </p>
      <input type="date" value={selectedDate} onChange={dateChangeHandler} />
      <p>
        <label> Payment Method</label>
        <select onChange={payMethodHandler}>
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
