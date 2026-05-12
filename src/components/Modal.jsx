function Modal({ onCloseModal, children }) {
  return (
    <>
      <div
        className="fixed inset-0 z-10 h-full w-full bg-black opacity-45"
        onClick={onCloseModal}
      />
      <dialog
        open
        className="fixed top-20 left-1/2 z-20 w-3/4 -translate-x-1/2 rounded-lg bg-[#D3DAC8] p-3 drop-shadow-lg md:w-1/2"
      >
        {children}
      </dialog>
    </>
  );
}
export default Modal;
