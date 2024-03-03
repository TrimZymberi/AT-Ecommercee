export default function Input({ htmlFor, labelName, props, children, value }) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {labelName}
      </label>
      <input
        {...props}
        placeholder={labelName}
        value={value}
        className="bg-gray-50 border-2 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
        required=""
      />
      {children}
    </div>
  );
}
