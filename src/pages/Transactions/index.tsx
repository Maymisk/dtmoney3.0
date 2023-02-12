import { useEffect, useState } from 'react';
import { Pagination } from '../../components/Pagination';
import { useTransactions } from '../../contexts/TransactionsContext';
import { SearchTransactionsForm } from './components/SearchTransactionsInput';
import { TransactionsTable } from './components/TransactionsTable';
import { TransactionsContainer } from './styles';

export function Transactions() {
	const { fetchTransactions, totalTransactions } = useTransactions();

	const [activePage, setActivePage] = useState(1);
	const [isFetching, setIsFetching] = useState(false);

	function changeActivePage(page: number) {
		setActivePage(page);
	}

	useEffect(() => {
		async function fetch() {
			setIsFetching(true);

			await fetchTransactions({
				page: activePage,
			});

			setIsFetching(false);
		}

		fetch();
	}, [activePage]);

	return (
		<TransactionsContainer>
			<SearchTransactionsForm />

			<TransactionsTable isFetching={isFetching} />

			<Pagination
				activePage={activePage}
				setActivePage={changeActivePage}
				transactionsCount={totalTransactions}
			/>
		</TransactionsContainer>
	);
}
