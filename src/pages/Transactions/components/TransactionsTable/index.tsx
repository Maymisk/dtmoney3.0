import { useTransactions } from '../../../../contexts/TransactionsContext';
import { DateFormatter, PriceFormatter } from '../../../../utils/formatter';
import { Table, PriceHighlight } from './styles';
import { Spinner } from 'phosphor-react';

interface ITransactionsTableProps {
	isFetching: boolean;
}

export function TransactionsTable({ isFetching }: ITransactionsTableProps) {
	const { transactions } = useTransactions();

	return (
		<>
			{isFetching ? (
				<Spinner size={30} />
			) : (
				<Table>
					<tbody>
						{transactions.map(transaction => {
							return (
								<tr key={transaction.id}>
									<td>{transaction.description}</td>

									<td>
										<PriceHighlight
											variant={transaction.type}
										>
											{transaction.type === 'outflow' &&
												'- '}
											{PriceFormatter.format(
												transaction.price
											)}
										</PriceHighlight>
									</td>

									<td>{transaction.category}</td>

									<td>
										{DateFormatter.format(
											new Date(transaction.createdAt)
										)}
									</td>
								</tr>
							);
						})}
					</tbody>
				</Table>
			)}
		</>
	);
}
