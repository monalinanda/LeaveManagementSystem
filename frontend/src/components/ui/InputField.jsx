const InputField = ({ label, id, name, type = "text", onChange, value  , disabled}) => {
	const style =  disabled ? "shadow appearance-none border rounded w-full py-2 px-3 mb-5  text-gray-700 leading-tight focus:outline-none focus:shadow-outline" :'mt-1 p-2 w-full  mb-5  border rounded-md text-black focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300'
	return (
		<div>
			<label htmlFor={id} className='block text-sm font-semibold text-gray-700'>
				{label}
			</label>
			<input
				className= {style}
				id={id}
				type={type}
				name={name}
				value={value}
				onChange={onChange}
				disabled ={disabled ?disabled : false}
			/>
		</div>
	);
};

export default InputField;