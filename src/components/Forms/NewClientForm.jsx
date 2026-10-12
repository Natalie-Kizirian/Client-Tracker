import { useState } from "react";

function NewClientForm({
  closeModal,
  onAddClient,
  defaultData,
  onDeleteClient,
}) {
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
    closeModal();  }
  return (
    <>
      <form className="flex w-full flex-col gap-4" onSubmit={submitHandler}>
        <label htmlFor="name" className="text-lg font-semibold text-black">
          Add a new client
        </label>
        <input
          className="shadow-inset-black rounded-md p-2 focus:outline-none"
          type="text"
          placeholder="Add Client Name"
          onChange={(e) => setEnteredName(e.target.value)}
          value={enteredName}
          required
        />

        <div className="flex flex-col justify-between gap-3 md:gap-4">
          <select
            className="bg-background w-full rounded-lg border border-white p-2 text-sm focus:outline-none"
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
            className="bg-surface w-full rounded-lg border border-white p-2 outline-none"
            value={enteredNote}
            onChange={(e) => setNote(e.target.value)}
          />
          {defaultData ? (
            <button
              type="button"
              className="text-muted text-end"
              onClick={onDeleteClient}
            >
              Delete Client
            </button>
          ) : (
            ""
          )}
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
export default NewClientForm;
