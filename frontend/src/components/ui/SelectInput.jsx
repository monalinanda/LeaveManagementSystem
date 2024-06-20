const SelectInput = ({ label, id, name, onChange, value, options }) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-gray-700">
        {label}
      </label>
      <select
        name={name}
        className="mt-1 p-2 mb-5 w-full border rounded-md text-black focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
        value={value}
        onChange={onChange}
      >
        {options?.map((option, index) => (
          <option key={index} value={option.value ? option.value : option}>
            {option.value ? option.value : option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
