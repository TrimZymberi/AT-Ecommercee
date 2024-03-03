export default function Select({
  props,
  children,
  labelName,
  htmlFor,
  optionName,
  raw_data,
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {labelName}
      </label>
      <select
        {...props}
        className="bg-gray-50 border-2 border-gray-300 text-gray-700 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-4.5"
      >
        <option value="" disabled selected>
          {optionName}
        </option>
        {raw_data.map((data) => (
          <option key={data.id} value={data.id}>
            {data.name}
          </option>
        ))}
      </select>
      {children}
    </div>
  );
}
