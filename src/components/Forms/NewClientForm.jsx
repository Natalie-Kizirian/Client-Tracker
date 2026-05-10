import { useState } from "react";

function NewClientForm({ closeModal, onAddClient }) {
  const [enteredName, setEnteredName] = useState("");

  function submitHandler(e) {
    e.preventDefault();
    const clientData = {
      id: crypto.randomUUID(),
      name: enteredName,
      visits: [],
    };
    onAddClient(clientData);
    closeModal();
    console.log(clientData)
  }
  return (
    <>
      <form onSubmit={submitHandler} className="flex flex-col">
        <label htmlFor="name">Client Name</label>
        <input
          type="text"
          name=""
          id="name"
          onChange={(e) => setEnteredName(e.target.value)}
          required
        />

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
export default NewClientForm;
