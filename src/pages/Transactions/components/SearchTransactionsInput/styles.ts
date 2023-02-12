import { PersonSimple } from 'phosphor-react';
import styled from 'styled-components';

export const InputContainer = styled.form`
	width: 100%;

	display: flex;
	align-items: center;
	gap: 1rem;
`;

export const SearchTransactionsInput = styled.input`
	flex: 1;

	background: ${props => props.theme['gray-900']};

	padding: 1rem;

	border-radius: 6px;

	color: ${props => props.theme['gray-500']};

	::placeholder {
		color: ${props => props.theme['gray-500']};

		line-height: 140%;
	}
`;

export const SearchTransactionsButton = styled.button`
	background: transparent;

	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.75rem;

	padding: 0.875rem 2rem;

	color: ${props => props.theme['green-300']};

	border: 1px solid ${props => props.theme['green-300']};
	border-radius: 6px;

	transition: background-color 0.2s, color 0.2s;

	&:hover {
		background: ${props => props.theme['green-500']};
		color: ${props => props.theme.white};
	}
`;
