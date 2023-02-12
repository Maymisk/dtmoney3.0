import styled from 'styled-components';
import {
	DialogClose,
	DialogContent,
	DialogOverlay,
} from '@radix-ui/react-dialog';
import { Root, Item } from '@radix-ui/react-radio-group';

export const ModalOverlay = styled(DialogOverlay)`
	width: 100vw;
	height: 100vh;

	position: fixed;
	inset: 0;

	background: rgba(0, 0, 0, 0.75);
`;

export const CloseModaButton = styled(DialogClose)`
	position: absolute;
	top: 1.5rem;
	right: 1.5rem;

	background: transparent;

	line-height: 0;

	cursor: pointer;

	color: ${props => props.theme['gray-500']};
`;

export const ModalContent = styled(DialogContent)`
	min-width: 32rem;

	background: ${props => props.theme['gray-800']};
	color: ${props => props.theme.white};

	padding: 2.5rem 3rem;

	border-radius: 6px;

	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	@media (max-width: 768px) {
		min-width: 20rem;
	}
`;

export const NewTransactionForm = styled.form`
	width: 100%;

	display: flex;
	flex-direction: column;
	gap: 1rem;

	margin-top: 2rem;

	input {
		width: 100%;

		padding: 1rem;

		background: ${props => props.theme['gray-900']};
		color: ${props => props.theme['gray-300']};

		border-radius: 6px;

		::placeholder {
			color: ${props => props.theme['gray-500']};
		}
	}
`;

export const TransactionType = styled(Root)`
	width: 100%;

	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 1rem;
`;

interface ITransactionTypeButtonProps {
	variant: 'green-300' | 'red-300';
}

export const TransactionTypeButton = styled(Item)<ITransactionTypeButtonProps>`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;

	background: ${props => props.theme['gray-700']};
	color: ${props => props.theme['gray-300']};

	border-radius: 6px;

	padding: 1rem 1.5rem;

	transition: background-color 0.2s, color 0.2s;

	svg {
		color: ${props => props.theme[props.variant]};
	}

	&:hover {
		background: ${props => props.theme['gray-600']};
	}

	&[data-state='checked'] {
		background: ${props => props.theme[props.variant]};
		color: ${props => props.theme.white};
		box-shadow: 0 0 0 2px ${props => props.theme[props.variant]};

		svg {
			color: ${props => props.theme.white};
		}
	}
`;

export const SubmitTransactionFormButton = styled.button`
	width: 100%;

	text-align: center;

	background: ${props => props.theme['green-500']};
	color: ${props => props.theme.white};

	border-radius: 6px;

	padding: 1rem 2rem;

	font-weight: bold;

	margin-top: 1rem;

	transition: background-color 0.2s;

	&:not(:disabled):hover {
		background: ${props => props.theme['green-700']};
	}

	&:disabled {
		opacity: 0.6;
	}
`;

export const NewTransactionButton = styled.button`
	padding: 0.75rem 1.25rem;

	background: ${props => props.theme['green-500']};
	color: ${props => props.theme.white};

	border-radius: 6px;

	text-align: center;

	font-weight: bold;

	line-height: 160%;
`;
