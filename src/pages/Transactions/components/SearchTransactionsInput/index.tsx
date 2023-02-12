import { yupResolver } from '@hookform/resolvers/yup';
import { MagnifyingGlass } from 'phosphor-react';
import { useForm } from 'react-hook-form';
import { useTransactions } from '../../../../contexts/TransactionsContext';
import {
	SearchTransactionsInput,
	InputContainer,
	SearchTransactionsButton,
} from './styles';

import { object, string } from 'yup';

interface ISearchData {
	query: string;
}

const searchFormSchema = object({
	query: string(),
});

export function SearchTransactionsForm() {
	const { fetchTransactions } = useTransactions();
	const { register, handleSubmit } = useForm<ISearchData>({
		resolver: yupResolver(searchFormSchema),
	});

	async function handleSearch({ query }: ISearchData) {
		await fetchTransactions({
			query,
		});
	}

	return (
		<InputContainer onSubmit={handleSubmit(handleSearch)}>
			<SearchTransactionsInput
				type="text"
				placeholder="Buscar transações"
				{...register('query')}
			/>
			<SearchTransactionsButton type="submit">
				<MagnifyingGlass />
				<strong>Buscar</strong>
			</SearchTransactionsButton>
		</InputContainer>
	);
}
