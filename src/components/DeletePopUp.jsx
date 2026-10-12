function DeletePopUp({ onConfirm, onCancel }) {
  return (
    <>
      <div className="border">
        <div className="fixed inset-0 z-20 h-full w-full bg-black opacity-50" />

        <div className="bg-surface fixed top-1/3 left-1/2 z-20 -translate-x-1/2 rounded-lg p-3 drop-shadow-lg min-[320px]:w-[85vw] lg:w-1/2">
          <h2 className="pb-4 text-center text-xl">Are you sure?</h2>
          <div className="flex w-full justify-between gap-5">
            <button
              className="stroke-button-md w-full lg:w-1/3"
              onClick={onCancel}
            >
              No
            </button>
            <button
              className="primary-button-md w-full lg:w-1/3"
              onClick={onConfirm}
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default DeletePopUp;
