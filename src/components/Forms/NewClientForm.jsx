import { useState } from "react";

function NewClientForm({ closeModal, onAddClient, defaultData }) {
  const [enteredName, setEnteredName] = useState(defaultData?.name ?? "");
  const [enteredStatus, setEnteredStatus] = useState(
    defaultData?.status ?? "new",
  );

  const [enteredNote, setNote] = useState(defaultData?.note || "");
  function submitHandler(e) {
    e.preventDefault();
    const clientData = {
      id: defaultData?.id ?? crypto.randomUUID(),
      name: enteredName,
      status: enteredStatus,
      visits: defaultData?.visits ?? [],
      note: enteredNote,
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
        <label htmlFor="name" className="text-xl font-semibold text-black">
          Client Information
        </label>
        <input
          className="w-full rounded-md border bg-white p-1"
          type="text"
          placeholder="Add Client Name"
          onChange={(e) => setEnteredName(e.target.value)}
          value={enteredName}
          required
        />

        <div className="flex flex-col justify-between gap-2 md:flex-row md:gap-4">
          <select
            className="bg-light w-full rounded-lg border border-white p-2"
            name="status"
            value={enteredStatus}
            onChange={(e) => setEnteredStatus(e.target.value)}
          >
            <option value="new">New Client</option>
            <option value="active">Active Client</option>
            <option value="one-time">One-time Client</option>
            <option value="inactive">Inactive Client</option>
          </select>
          {/* NOTE */}
          <textarea
            type="text"
            maxLength={75}
            placeholder="Add a note"
            className="bg-light w-full rounded-lg border border-white p-2 outline-none"
            value={enteredNote}
            onChange={(e) => setNote(e.target.value)}
          />
        </div>

        <div className="mt-8 flex justify-end gap-2">
          <button
            type="button"
            onClick={closeModal}
            className="button-secondary"
          >
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
