function Modal({ onCloseModal, children }) {
  return (
    <>
      <div
        className="fixed inset-0 z-10 h-full w-full bg-black opacity-45"
        onClick={onCloseModal}
      />
      <dialog open className="fixed z-20">
        {children}
      </dialog>
    </>
  );
}
export default Modal;
