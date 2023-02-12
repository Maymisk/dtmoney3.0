import styled from 'styled-components';

export const Table = styled.table`
	width: 100%;

	border-spacing: 0 0.5rem;

	margin-top: 1.5rem;

	color: ${props => props.theme['gray-300']};

	text-align: left;

	tr {
		background: ${props => props.theme['gray-700']};

		td {
			padding: 1.25rem 2rem;

			&:first-child {
				max-width: 110px;

				border-radius: 6px 0 0 6px;

				white-space: nowrap;
				text-overflow: ellipsis;
				overflow: hidden;
			}

			&:last-child {
				border-radius: 0 6px 6px 0;
			}
		}
	}

	@media (max-width: 767px) {
		tr {
			td {
				padding: 0.75rem 1.5rem;
			}

			td:nth-of-type(4) {
				display: none;
			}
		}
	}
`;

interface IPriceHighlight {
	variant?: 'income' | 'outflow';
}

export const PriceHighlight = styled.span<IPriceHighlight>`
	color: ${props =>
		props.variant === 'outflow'
			? props.theme['red-500']
			: props.theme['green-300']};
`;
