import { useState } from 'react';
import BalanceStat from './BalanceStat';
import ExpenseForm from './ExpenseForm';
import ExpenseStat from './ExpenseStat';
import IncomeStat from './IncomeStat';

const ExpenseBoard = () => {
	const defaultTransactions = [
		{ type: 'income', amount: 1500, category: 'Salary', date: '2024-10-01' },
		{ type: 'expense', amount: 200, category: 'Food', date: '2024-10-02' },
		{ type: 'expense', amount: 100, category: 'Transport', date: '2024-10-03' },
		{
			type: 'income',
			amount: 500,
			category: 'Outsourcing',
			date: '2024-10-05',
		},
		{ type: 'expense', amount: 50, category: 'Bill', date: '2024-10-06' },
		{ type: 'income', amount: 100, category: 'Dividend', date: '2024-10-07' },
	];
	const [transactions, setTransactions] = useState(defaultTransactions);

	const incomeTransactions = transactions.filter((t) => t.type === 'income');
	const expenseTransactions = transactions.filter((t) => t.type === 'expense');

	const addTransactions = (newTransaction) => {
		setTransactions((prevTransactions) => [
			...prevTransactions,
			newTransaction,
		]);
	};
	return (
		<main className="relative mx-auto mt-10 w-full max-w-7xl">
			<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{/* <!-- Submission Form --> */}
				<ExpenseForm />

				{/* <!-- Right Column --> */}
				<div className="lg:col-span-2">
					{/* <!-- Total Balance Stat--> */}
					<BalanceStat
						totalBalance="20000"
						totalExpense="20000"
						totalIncome="20000"
					/>

					{/* <!-- List Down --> */}
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
						{/* <!-- Income --> */}
						<IncomeStat transactions={incomeTransactions} />

						{/* <!-- Expense --> */}
						<ExpenseStat transactions={expenseTransactions} />
					</div>
				</div>
			</section>
		</main>
	);
};

export default ExpenseBoard;
