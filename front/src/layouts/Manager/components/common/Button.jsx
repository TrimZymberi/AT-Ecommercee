export default function Button({ children, type }) {
  return (
    <button
      type={type}
      className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
    >
      {children}
    </button>
  );
}
