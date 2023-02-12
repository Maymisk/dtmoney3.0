import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react';
import { useMemo } from 'react';
import { useTransactions } from '../../contexts/TransactionsContext';
import { PriceFormatter } from '../../utils/formatter';
import { SummaryCard, SummaryCardHeader, SummaryContainer } from './styles';

interface ISummary {
	income: number;
	outflow: number;
	total: number;
}

export function Summary() {
	const { transactions } = useTransactions();

	const summary = useMemo(() => {
		return transactions.reduce(
			(acc, transaction) => {
				if (transaction.type === 'income') {
					acc.income += transaction.price;
					acc.total += transaction.price;
				} else {
					acc.outflow += transaction.price;
					acc.total -= transaction.price;
				}

				return acc;
			},
			{
				income: 0,
				outflow: 0,
				total: 0,
			}
		);
	}, [transactions]);

	return (
		<SummaryContainer>
			<SummaryCard>
				<SummaryCardHeader iconColor="green-300">
					<span>Entradas</span>
					<ArrowCircleUp size={32} />
				</SummaryCardHeader>

				<strong>{PriceFormatter.format(summary.income)}</strong>
			</SummaryCard>

			<SummaryCard>
				<SummaryCardHeader iconColor="red-500">
					<span>Saídas</span>
					<ArrowCircleDown size={32} />
				</SummaryCardHeader>

				<strong>{PriceFormatter.format(summary.outflow)}</strong>
			</SummaryCard>

			<SummaryCard variant="green">
				<SummaryCardHeader iconColor="white">
					<span>Total</span>
					<CurrencyDollar size={32} />
				</SummaryCardHeader>

				<strong>{PriceFormatter.format(summary.total)}</strong>
			</SummaryCard>
		</SummaryContainer>
	);
}
