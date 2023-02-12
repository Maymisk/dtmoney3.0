import * as Dialog from '@radix-ui/react-dialog';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import {
	CloseModaButton,
	ModalContent,
	ModalOverlay,
	NewTransactionButton,
	NewTransactionForm,
	SubmitTransactionFormButton,
	TransactionType,
	TransactionTypeButton,
} from './styles';

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string, number } from 'yup';
import { useTransactions } from '../../contexts/TransactionsContext';
import { useState } from 'react';

interface IFormData {
	description: string;
	price: number;
	category: string;
	type: 'income' | 'outflow';
}

const newTransactionFormSchema = object({
	description: string().max(100).required(),
	price: number().moreThan(0).required(),
	category: string().max(50).required(),
	type: string().oneOf(['income', 'outflow']).required(),
});

export function NewTransactionModal() {
	const {
		register,
		handleSubmit,
		formState: { isSubmitting },
		control,
		reset,
	} = useForm<IFormData>({
		resolver: yupResolver(newTransactionFormSchema),
	});

	const { createTransaction } = useTransactions();

	const [modalIsOpen, setModalIsOpen] = useState(false);

	async function handleFormSubmission(data: IFormData) {
		await createTransaction(data);

		reset();
		setModalIsOpen(false);
	}

	return (
		<Dialog.Root
			open={modalIsOpen}
			onOpenChange={() => setModalIsOpen(prevState => !prevState)}
		>
			<Dialog.Trigger asChild>
				<NewTransactionButton>Nova Transação</NewTransactionButton>
			</Dialog.Trigger>

			<Dialog.Portal>
				<ModalOverlay />

				<ModalContent>
					<Dialog.Title>Nova Transação</Dialog.Title>

					<CloseModaButton>
						<X size={24} />
					</CloseModaButton>

					<NewTransactionForm
						onSubmit={handleSubmit(handleFormSubmission)}
					>
						<input
							type="text"
							placeholder="Descrição"
							required
							{...register('description')}
						/>
						<input
							type="number"
							placeholder="Preço"
							required
							{...register('price', { valueAsNumber: true })}
						/>
						<input
							type="text"
							placeholder="Categoria"
							required
							{...register('category')}
						/>

						<Controller
							name="type"
							control={control}
							render={({ field }) => {
								return (
									<TransactionType
										value={field.value}
										onValueChange={field.onChange}
									>
										<TransactionTypeButton
											value="income"
											variant="green-300"
										>
											<ArrowCircleUp size={24} />
											<span>Entrada</span>
										</TransactionTypeButton>

										<TransactionTypeButton
											value="outflow"
											variant="red-300"
										>
											<ArrowCircleDown size={24} />
											<span>Saída</span>
										</TransactionTypeButton>
									</TransactionType>
								);
							}}
						/>

						<SubmitTransactionFormButton
							type="submit"
							disabled={isSubmitting}
						>
							Cadastrar
						</SubmitTransactionFormButton>
					</NewTransactionForm>
				</ModalContent>
			</Dialog.Portal>
		</Dialog.Root>
	);
}
