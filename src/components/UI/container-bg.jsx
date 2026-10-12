export default function ContainerBackground({ children }) {
  return (
    <div className="bg-secondary flex w-full flex-col gap-3 rounded-xl px-3 py-6 text-black shadow-md">
      {children}
    </div>
  );
}
