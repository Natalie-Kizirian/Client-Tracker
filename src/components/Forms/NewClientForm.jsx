import { useState } from "react";

function NewClientForm({ closeModal, onAddClient, defaultData }) {
  const [enteredName, setEnteredName] = useState(defaultData?.name ?? "");
  const [enteredStatus, setEnteredStatus] = useState(
    defaultData?.status ?? "New Client",
  );

  function submitHandler(e) {
    e.preventDefault();
    const clientData = {
      id: defaultData?.id ?? crypto.randomUUID(),
      name: enteredName,
      status: enteredStatus,
      visits: defaultData?.visits ?? [],
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
          className="w-full rounded-md border bg-white p-1"
          type="text"
          name=""
          id="name"
          onChange={(e) => setEnteredName(e.target.value)}
          value={enteredName}
          required
        />
        <select
          name="status"
          value={enteredStatus}
          onChange={(e) => setEnteredStatus(e.target.value)}
        >
          <option value="New">New Client</option>
          <option value="Active">Active Client</option>
          <option value="One-time">One-time Client</option>
          <option value="VIP">VIP Client</option>
          <option value="Inactive">Inactive Client</option>
        </select>

        <div className="mt-8 flex justify-end gap-2">
          <button type="button" onClick={closeModal} className="px-2">
            Cancel
          </button>
          <button className="button-primary" type="submit">
            {defaultData ? "Save" : "Add"}
          </button>
        </div>
      </form>
    </>
  );
}
export default NewClientForm;
