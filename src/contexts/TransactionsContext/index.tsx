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
}: IFetchTransactionsProps) => Promise<void>;

type CreateTransactions = (data: CreateTransactionData) => Promise<void>;

interface ITransactionContextData {
	transactions: ITransaction[];
	totalTransactions: number;
	fetchTransactions: FetchTransactions;
	createTransaction: CreateTransactions;
}

interface ITransactionsProviderProps {
	children: ReactNode;
}

const TransactionsContext = createContext({} as ITransactionContextData);

export function TransactionsProvider({ children }: ITransactionsProviderProps) {
	const [transactions, setTransactions] = useState([] as ITransaction[]);
	const [totalTransactions, setTotalTransactions] = useState(0);

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

			setTotalTransactions(totalCount);

			setTransactions(response.data);
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
			setTotalTransactions(prevState => prevState + 1);
		},
		[]
	);

	return (
		<TransactionsContext.Provider
			value={{
				transactions,
				totalTransactions,
				createTransaction,
				fetchTransactions,
			}}
		>
			{children}
		</TransactionsContext.Provider>
	);
}

export function useTransactions() {
	return useContext(TransactionsContext);
}
