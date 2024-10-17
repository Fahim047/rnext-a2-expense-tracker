const SelectInput = ({ name, toggleFilter }) => {
	return (
		<label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
			<input
				type="checkbox"
				className="form-checkbox h-4 w-4 rounded-md text-gray-600"
				id="filter-option-1"
				onChange={() => toggleFilter(name)}
			/>
			<span className="ml-2">{name}</span>
		</label>
	);
};

export default SelectInput;
