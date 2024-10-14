import BalanceStat from './BalanceStat';
import ExpenseForm from './ExpenseForm';
import ExpenseStat from './ExpenseStat';
import IncomeStat from './IncomeStat';

const ExpenseBoard = () => {
	return (
		<main class="relative mx-auto mt-10 w-full max-w-7xl">
			<section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{/* <!-- Submission Form --> */}
				<ExpenseForm />

				{/* <!-- Right Column --> */}
				<div class="lg:col-span-2">
					{/* <!-- Total Balance Stat--> */}
					<BalanceStat />

					{/* <!-- List Down --> */}
					<div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
						{/* <!-- Income --> */}
						<IncomeStat />

						{/* <!-- Expense --> */}
						<ExpenseStat />
					</div>
				</div>
			</section>
		</main>
	);
};

export default ExpenseBoard;
