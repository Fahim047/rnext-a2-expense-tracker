const ExpenseForm = ({
	type,
	setType,
	formData,
	setFormData,
	setTransactions,
	addTransaction,
	mode,
	setMode,
}) => {
	const handleChange = (e) => {
		const name = e.target.name;
		let value = e.target.value;

		setFormData({
			...formData,
			[name]: value,
		});
		// console.log(formData);
	};

	const handleSubmit = (formData) => {
		// console.log(formData);
		if (mode === 'add') {
			const newTransaction = { ...formData, type, id: crypto.randomUUID() };
			addTransaction(newTransaction);
		} else {
			setTransactions((prevTransactions) =>
				prevTransactions.map((trx) =>
					trx.id === formData.id ? { ...formData, type } : trx
				)
			);
			setMode('add');
		}
		setFormData({
			category: '',
			amount: '',
			date: '',
		});
	};

	return (
		<div className="p-6 py-8 bg-[#F9FAFB] border rounded-md">
			<h2 className="text-3xl font-semibold leading-7 text-gray-800 text-center">
				Expense Tracker
			</h2>

			<form>
				<div className="flex mt-6">
					<button
						type="button"
						className={`flex-1 py-2 px-4 text-center font-medium ${
							type === 'expense'
								? 'bg-teal-500 text-white'
								: 'bg-white text-slate-900 hover:bg-gray-100'
						} rounded-l-md border`}
						onClick={() => setType('expense')}
					>
						Expense
					</button>
					<button
						type="button"
						className={`flex-1 py-2 px-4 text-center font-medium ${
							type === 'income'
								? 'bg-teal-500 text-white'
								: 'bg-white text-slate-900 hover:bg-gray-100'
						} rounded-r-md border`}
						onClick={() => setType('income')}
					>
						Income
					</button>
				</div>

				{/* Category Selection */}
				<div className="mt-3">
					<label
						htmlFor="category"
						className="block text-sm font-medium leading-6 text-gray-900"
					>
						Category
					</label>
					<div className="mt-2">
						<select
							id="category"
							name="category"
							value={formData.category}
							autoComplete="category-name"
							onChange={handleChange}
							className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
						>
							{type === 'expense' ? (
								<>
									<option>Select a category</option>
									<option>Education</option>
									<option>Food</option>
									<option>Health</option>
									<option>Bill</option>
									<option>Insurance</option>
									<option>Tax</option>
									<option>Transport</option>
									<option>Telephone</option>
								</>
							) : (
								<>
									<option>Select a category</option>
									<option>Salary</option>
									<option>Outsourcing</option>
									<option>Bond</option>
									<option>Dividend</option>
								</>
							)}
						</select>
					</div>
				</div>

				{/* Amount Input */}
				<div className="mt-3">
					<label
						htmlFor="amount"
						className="block text-sm font-medium leading-6 text-gray-900"
					>
						Amount
					</label>
					<div className="mt-2">
						<input
							type="number"
							name="amount"
							id="amount"
							value={formData.amount}
							autoComplete="off"
							placeholder="Enter amount"
							onChange={handleChange}
							className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
						/>
					</div>
				</div>

				{/* Date Input */}
				<div className="mt-3">
					<label
						htmlFor="date"
						className="block text-sm font-medium leading-6 text-gray-900"
					>
						Date
					</label>
					<div className="mt-2">
						<input
							type="date"
							name="date"
							id="date"
							value={formData.date}
							autoComplete="off"
							onChange={handleChange}
							className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
						/>
					</div>
				</div>

				{/* Submit Button */}
				<button
					type="submit"
					className="mt-6 rounded-md bg-teal-600 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 w-full"
					onClick={(e) => {
						e.preventDefault();
						handleSubmit(formData);
					}}
				>
					{mode === 'add' ? 'Save' : 'Update'}
				</button>
			</form>
		</div>
	);
};

export default ExpenseForm;
