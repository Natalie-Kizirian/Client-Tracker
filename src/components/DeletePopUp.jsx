function DeletePopUp({ onConfirm, onCancel }) {
  return (
    <>
      <div className="border">
        <div className="fixed inset-0 z-10 h-full w-full bg-black opacity-45" />

        <div className="fixed top-1/3 left-1/2 z-20 -translate-x-1/2 rounded-lg bg-[#BFC9B0] p-3 drop-shadow-lg min-[320px]:w-[85vw] lg:w-1/2">
          <h2 className="text-center text-xl">Are you sure?</h2>
          <div className="mt-4 flex justify-around">
            <button className="button-primary lg:w-1/3" onClick={onCancel}>
              No
            </button>
            <button className="button-secondary  lg:w-1/3" onClick={onConfirm}>
              Yes
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default DeletePopUp;
