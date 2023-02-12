import styled from 'styled-components';

export const TransactionsContainer = styled.main`
	width: 100%;
	max-width: 1120px;

	margin: 4rem auto 0;

	text-align: center;

	@keyframes spin {
		from {
			transform: rotate(0deg);
		}

		to {
			transform: rotate(360deg);
		}
	}

	> svg {
		color: ${props => props.theme['gray-400']};

		animation: spin 0.7s alternate infinite;

		margin-top: 2rem;
	}
`;
