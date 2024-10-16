import { formatDate } from '../lib/utils';
import PenIcon from './icons/pen';
import TrashIcon from './icons/trash';

const TransactionItem = ({
	setType,
	setFormData,
	transaction,
	setTransactions,
	setMode,
}) => {
	const { category, amount, date, type, id } = transaction;
	const handleEdit = () => {
		setType(type);
		setMode('edit');
		setFormData({
			id,
			category,
			amount,
			date,
		});
	};
	const handleDelete = (id) => {
		setTransactions((prevTransactions) =>
			prevTransactions.filter((trx) => trx.id !== id)
		);
	};
	return (
		<div className="flex justify-between items-center py-2 relative group cursor-pointer">
			<div>
				<h3 className="text-base font-medium leading-7 text-gray-600">
					{category}
				</h3>
				<p className="text-xs text-gray-600">{formatDate(date)}</p>
			</div>
			<div className="flex items-center gap-2">
				<p className="text-base font-semibold text-gray-600 transition-all group-hover:-translate-x-14">
					BDT {amount}
				</p>

				{/* <!-- 3 Dots --> */}
				<div className="translate-x-5 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 absolute right-0 top-1/2 -translate-y-1/2 transition-all">
					<button
						className="hover:text-teal-600"
						role="button"
						title="Edit"
						onClick={handleEdit}
					>
						<PenIcon />
					</button>

					<button
						className="hover:text-red-600"
						role="button"
						title="Delete"
						onClick={() => handleDelete(id)}
					>
						<TrashIcon />
					</button>
				</div>
			</div>
		</div>
	);
};

export default TransactionItem;
