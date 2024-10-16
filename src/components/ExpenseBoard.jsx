import { useState } from 'react';
import BalanceStat from './BalanceStat';
import ExpenseForm from './ExpenseForm';
import TransactionCard from './TransactionCard';

const defaultTransactions = [
	{
		id: 1,
		type: 'income',
		amount: 1500,
		category: 'Salary',
		date: '2024-10-01',
	},
	{ id: 2, type: 'expense', amount: 200, category: 'Food', date: '2024-10-02' },
	{
		id: 3,
		type: 'expense',
		amount: 100,
		category: 'Transport',
		date: '2024-10-03',
	},
];
const ExpenseBoard = () => {
	const [type, setType] = useState('expense');
	const [transactions, setTransactions] = useState(defaultTransactions);
	const [formData, setFormData] = useState({
		category: type === 'expense' ? 'Education' : 'Salary',
		amount: '',
		date: '',
	});
	const [mode, setMode] = useState('add');

	let incomeTransactions = transactions.filter((t) => t.type === 'income');
	let expenseTransactions = transactions.filter((t) => t.type === 'expense');

	const totalIncome = incomeTransactions.reduce(
		(sum, transaction) => sum + Number(transaction.amount),
		0
	);
	const totalExpense = expenseTransactions.reduce(
		(sum, transaction) => sum + Number(transaction.amount),
		0
	);
	const totalBalance = totalIncome - totalExpense;

	return (
		<main className="relative mx-auto mt-10 w-full max-w-7xl">
			<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{/* <!-- Submission Form --> */}
				<ExpenseForm
					type={type}
					setType={setType}
					formData={formData}
					setFormData={setFormData}
					setTransactions={setTransactions}
					mode={mode}
					setMode={setMode}
				/>
				{/* <!-- Right Column --> */}
				<div className="lg:col-span-2">
					{/* <!-- Total Balance Stat--> */}
					<BalanceStat
						totalBalance={totalBalance}
						totalExpense={totalExpense}
						totalIncome={totalIncome}
					/>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
						{/* <!-- Income --> */}
						<TransactionCard
							type="income"
							setType={setType}
							setFormData={setFormData}
							transactions={incomeTransactions}
							setTransactions={setTransactions}
							setMode={setMode}
						/>
						{/* <!-- Expense --> */}
						<TransactionCard
							type="expense"
							setType={setType}
							setFormData={setFormData}
							transactions={expenseTransactions}
							setTransactions={setTransactions}
							setMode={setMode}
						/>
					</div>
				</div>
			</section>
		</main>
	);
};

export default ExpenseBoard;
