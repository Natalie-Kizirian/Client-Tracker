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
    console.log(clientData);
  }
  return (
    <>
      <form
        className="flex w-full flex-col gap-4 rounded-md"
        onSubmit={submitHandler}
      >
        <label htmlFor="name" className="text-xl font-semibold">
          Client Name
        </label>
        <input
          className="w-full rounded-md border p-1"
          type="text"
          name=""
          id="name"
          onChange={(e) => setEnteredName(e.target.value)}
          required
        />

        <div className="mt-8 flex justify-end gap-2">
          <button type="button" onClick={closeModal} className="px-2">
            Cancel
          </button>
          <button className="button-secondary" type="submit">
            Add
          </button>
        </div>
      </form>
    </>
  );
}
export default NewClientForm;
