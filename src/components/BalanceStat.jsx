import React from 'react';

const BalanceStat = () => {
	return (
		<div class="bg-white">
			<div class="mx-auto max-w-7xl">
				<dl class="grid grid-cols-1 text-center lg:grid-cols-3 divide-x-2 border rounded-md overflow-hidden">
					<div class="bg-[#F9FAFB] flex lg:max-w-xs flex-col px-4 py-4">
						<dt class="text-base leading-7 text-gray-600">Balance</dt>
						<dd class="order-first text-xl font-semibold tracking-tight text-gray-700 sm:text-3xl">
							BDT 20000
						</dd>
					</div>
					<div class="bg-[#F9FAFB] flex lg:max-w-xs flex-col px-4 py-4">
						<dt class="text-base leading-7 text-gray-600">Total Income</dt>
						<dd class="order-first text-xl font-semibold tracking-tight text-gray-700 sm:text-3xl">
							BDT 20000
						</dd>
					</div>
					<div class="bg-[#F9FAFB] flex lg:max-w-xs flex-col px-4 py-4">
						<dt class="text-base leading-7 text-gray-600">Total Expense</dt>
						<dd class="order-first text-xl font-semibold tracking-tight text-gray-700 sm:text-3xl">
							BDT 20000
						</dd>
					</div>
				</dl>
			</div>
		</div>
	);
};

export default BalanceStat;
