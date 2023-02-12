import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
	useCallback,
} from 'react';
import { api } from '../../../api';

interface ITransaction {
	id: number;
	description: string;
	category: string;
	price: number;
	type: 'income' | 'outflow';
	createdAt: string;
}

type CreateTransactionData = Pick<
	ITransaction,
	'description' | 'category' | 'price' | 'type'
>;

interface IFetchTransactionsProps {
	query?: string;
	page?: number;
}

type FetchTransactions = ({
	query,
	page,
}: IFetchTransactionsProps) => Promise<number>;

type CreateTransactions = (data: CreateTransactionData) => Promise<void>;

interface ITransactionContextData {
	transactions: ITransaction[];
	fetchTransactions: FetchTransactions;
	createTransaction: CreateTransactions;
}

interface ITransactionsProviderProps {
	children: ReactNode;
}

const TransactionsContext = createContext({} as ITransactionContextData);

export function TransactionsProvider({ children }: ITransactionsProviderProps) {
	const [transactions, setTransactions] = useState([] as ITransaction[]);

	const fetchTransactions = useCallback(
		async ({ query, page = 1 }: IFetchTransactionsProps) => {
			const response = await api.get<ITransaction[]>('/transactions', {
				params: {
					q: query,
					_page: page,
					_limit: 10,
				},
			});

			const totalCount = Number(response.headers['x-total-count']);

			setTransactions(response.data);

			return totalCount;
		},
		[]
	);

	const createTransaction = useCallback(
		async (data: CreateTransactionData) => {
			const response = await api.post('/transactions', {
				...data,
				createdAt: new Date().toISOString(),
			});

			setTransactions(prevState => [response.data, ...prevState]);
		},
		[]
	);

	return (
		<TransactionsContext.Provider
			value={{ transactions, createTransaction, fetchTransactions }}
		>
			{children}
		</TransactionsContext.Provider>
	);
}

export function useTransactions() {
	return useContext(TransactionsContext);
}
