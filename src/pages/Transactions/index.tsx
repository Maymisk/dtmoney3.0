import { useEffect, useState } from 'react';
import { Pagination } from '../../components/Pagination';
import { useTransactions } from '../../contexts/TransactionsContext';
import { SearchTransactionsForm } from './components/SearchTransactionsInput';
import { TransactionsTable } from './components/TransactionsTable';
import { TransactionsContainer } from './styles';

export function Transactions() {
	const { fetchTransactions } = useTransactions();
	const [activePage, setActivePage] = useState(1);
	const [isFetching, setIsFetching] = useState(false);

	const [transactionsCount, setTransactionsCount] = useState(0);

	useEffect(() => {
		setIsFetching(true);

		fetchTransactions({ page: activePage }).then(value => {
			setTransactionsCount(value);
			setIsFetching(false);
		});
	}, [activePage]);

	return (
		<TransactionsContainer>
			<SearchTransactionsForm />

			<TransactionsTable isFetching={isFetching} />

			<Pagination
				activePage={activePage}
				setActivePage={setActivePage}
				transactionsCount={transactionsCount}
			/>
		</TransactionsContainer>
	);
}
