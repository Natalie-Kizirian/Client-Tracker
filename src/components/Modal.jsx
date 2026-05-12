function Modal({ onCloseModal, children }) {
  return (
    <>
      <div
        className="fixed inset-0 z-10 h-full w-full bg-black opacity-45"
        onClick={onCloseModal}
      />
      <dialog
        open
        className="fixed top-20 left-1/2 z-20 -translate-x-1/2 rounded-lg bg-[#BFC9B0] p-3 drop-shadow-lg min-[320px]:w-[85vw] lg:w-1/2"
      >
        {children}
      </dialog>
    </>
  );
}
export default Modal;
