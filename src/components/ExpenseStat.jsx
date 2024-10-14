import ExpenseIcon from './icons/expense';
import FilterIcon from './icons/filter';
import SortIcon from './icons/sort';
import TransactionItem from './TransactionItem';

const ExpenseStat = ({ transactions }) => {
	return (
		<div class="border rounded-md">
			{/* <!-- Header --> */}
			<div class="flex items-center justify-between gap-2 bg-[#F9FAFB] py-4 px-4 rounded-md">
				<div class="flex items-center gap-2">
					{/* <!-- Icon --> */}
					<div class="h-10 w-10 bg-pink-600 text-white rounded-md text-center object-center place-content-center text-base">
						<ExpenseIcon />
					</div>
					{/* <!-- Text --> */}
					<div>
						<h3 class="text-xl font-semibold leading-7 text-gray-800">
							Expense
						</h3>
					</div>
				</div>

				{/* <!-- Sorting and Filtering Column --> */}
				<div>
					{/* <!-- Sorting --> */}
					<div class="relative inline-block text-left">
						<div>
							<button
								type="button"
								class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
								id="menu-button2"
								aria-expanded="true"
								aria-haspopup="true"
							>
								<SortIcon />
							</button>
						</div>

						<div
							class="hidden absolute z-10 mt-2 left-5 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
							role="menu2"
							aria-orientation="vertical"
							aria-labelledby="menu-button2"
							tabindex="-1"
						>
							<div class="py-1" role="none">
								<a
									href="#"
									class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all"
									role="menuitem"
									tabindex="-1"
									id="menu-item-0"
								>
									Low to High
								</a>
								<a
									href="#"
									class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all"
									role="menuitem"
									tabindex="-1"
									id="menu-item-0"
								>
									High to Low
								</a>
							</div>
						</div>
					</div>

					{/* <!-- Filtering --> */}
					<div class="relative inline-block text-left">
						<div>
							<button
								type="button"
								class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
								id="filter-button-2"
								aria-expanded="true"
								aria-haspopup="true"
							>
								<FilterIcon />
							</button>
						</div>

						<div
							class="hidden absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
							role="menu"
							aria-orientation="vertical"
							aria-labelledby="filter-button-2"
							tabindex="-1"
							id="filter-dropdown2"
						>
							<div class="py-1" role="none">
								<label class="inline-flex items-center px-4 py-2 text-sm text-gray-700">
									<input
										type="checkbox"
										class="form-checkbox h-4 w-4 rounded-md text-gray-600"
										id="filter-option-1"
									/>
									<span class="ml-2">Education</span>
								</label>
								<label class="inline-flex items-center px-4 py-2 text-sm text-gray-700">
									<input
										type="checkbox"
										class="form-checkbox h-4 w-4 rounded-md text-gray-600"
										id="filter-option-2"
									/>
									<span class="ml-2">Food</span>
								</label>
								<label class="inline-flex items-center px-4 py-2 text-sm text-gray-700">
									<input
										type="checkbox"
										class="form-checkbox h-4 w-4 rounded-md text-gray-600"
										id="filter-option-3"
									/>
									<span class="ml-2">Health</span>
								</label>
							</div>
						</div>
					</div>
				</div>
				{/* <!-- Sorting and Filtering Column Ends --> */}
			</div>

			<div class="p-4 divide-y">
				{/* <!-- Expense Transactions --> */}
				{transactions.map((trx, index) => (
					<TransactionItem
						key={index}
						category={trx.category}
						amount={trx.amount}
						date={trx.date}
					/>
				))}
			</div>
		</div>
	);
};

export default ExpenseStat;
