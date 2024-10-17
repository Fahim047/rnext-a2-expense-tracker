import { useState } from 'react';
import { expenseCategories, incomeCategories } from '../data';
import ExpenseIcon from './icons/expense';
import FilterIcon from './icons/filter';
import IncomeIcon from './icons/income';
import SortIcon from './icons/sort';
import SelectInput from './SelectInput';
import TransactionItem from './TransactionItem';
const TransactionCard = ({
	type,
	setType,
	setFormData,
	transactions,
	setTransactions,
	setMode,
}) => {
	const [showSortMenu, setShowSortMenu] = useState(false);
	const [showFilterMenu, setShowFilterMenu] = useState(false);
	const [sortOrder, setSortOrder] = useState('');
	const [selectedFilters, setSelectedFilters] = useState([]);

	const toggleFilter = (filter) => {
		setSelectedFilters((prevFilters) =>
			prevFilters.includes(filter)
				? prevFilters.filter((item) => item !== filter)
				: [...prevFilters, filter]
		);
	};

	const filteredTransactions = transactions.filter((transaction) => {
		if (selectedFilters.length === 0) {
			return true;
		}
		return selectedFilters.includes(transaction.category);
	});
	console.log(selectedFilters);
	const handleSort = (sortBy) => {
		setSortOrder(sortBy);
		setShowSortMenu(false);
	};
	const sortedTransactions = [...filteredTransactions].sort((a, b) => {
		if (sortOrder === 'asc') {
			return a.amount - b.amount;
		} else if (sortOrder === 'desc') {
			return b.amount - a.amount;
		}
		return 0;
	});

	return (
		<div className="border rounded-md relative">
			{/* <!-- Header --> */}
			<div className="flex items-center justify-between gap-2 bg-[#F9FAFB] py-4 px-4 rounded-md">
				<div className="flex items-center gap-2">
					{/* <!-- Icon --> */}
					<div
						className={`h-10 w-10 text-white rounded-md text-center object-center place-content-center text-base ${
							type === 'income' ? 'bg-teal-600' : 'bg-pink-600'
						}`}
					>
						{type === 'income' ? <IncomeIcon /> : <ExpenseIcon />}
					</div>
					{/* <!-- Text --> */}
					<div>
						<h3 className="capitalize text-xl font-semibold leading-7 text-gray-800">
							{type}
						</h3>
					</div>
				</div>
				<div className="space-x-1">
					{/* <!-- Sorting --> */}
					<div className="relative inline-block text-left">
						<div>
							<button
								type="button"
								className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
								id="menu-button"
								aria-expanded="true"
								aria-haspopup="true"
								onClick={() => {
									setShowSortMenu(!showSortMenu);
									setShowFilterMenu(false);
								}}
							>
								<SortIcon />
							</button>
						</div>

						{showSortMenu && (
							<div
								className="absolute z-10 mt-2 right-0 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
								role="menu"
								aria-orientation="vertical"
								aria-labelledby="menu-button"
								tabIndex="-1"
							>
								<ul className="py-1" role="none">
									<li
										className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all cursor-pointer"
										role="menuitem"
										tabindex="-1"
										id="menu-item-0"
										onClick={() => handleSort('asc')}
									>
										Low to High
									</li>
									<li
										className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all cursor-pointer"
										role="menuitem"
										tabIndex="-1"
										id="menu-item-0"
										onClick={() => handleSort('desc')}
									>
										High to Low
									</li>
								</ul>
							</div>
						)}
					</div>

					{/* <!-- Filtering --> */}
					<div className="relative inline-block text-left">
						<div>
							<button
								type="button"
								className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
								id="filter-button"
								aria-expanded="true"
								aria-haspopup="true"
								onClick={() => {
									setShowFilterMenu(!showFilterMenu);
									setShowSortMenu(false);
								}}
							>
								<FilterIcon />
							</button>
						</div>

						{showFilterMenu && (
							<div
								className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
								role="menu"
								aria-orientation="vertical"
								aria-labelledby="filter-button"
								tabIndex="-1"
								id="filter-dropdown"
							>
								{type === 'income' ? (
									<div className="py-1" role="none">
										{incomeCategories.map((category) => (
											<SelectInput
												key={category}
												toggleFilter={toggleFilter}
												name={category}
											/>
										))}
									</div>
								) : (
									<div className="py-1" role="none">
										{expenseCategories.map((category) => (
											<SelectInput
												key={category}
												toggleFilter={toggleFilter}
												name={category}
											/>
										))}
									</div>
								)}
							</div>
						)}
					</div>
				</div>
			</div>

			<div className="p-4 divide-y">
				{/* <!-- Income Transactions --> */}
				{sortedTransactions.map((transaction) => (
					<TransactionItem
						key={transaction.id}
						setType={setType}
						setFormData={setFormData}
						transaction={transaction}
						setTransactions={setTransactions}
						setMode={setMode}
					/>
				))}
			</div>
		</div>
	);
};

export default TransactionCard;
