import styled from 'styled-components';

export const PaginationContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1rem;

	margin-top: 2.5rem;

	> button {
		background: transparent;

		svg {
			color: ${props => props.theme['green-500']};
		}

		&:disabled {
			svg {
				color: ${props => props.theme['gray-600']};
			}
		}
	}
`;

export const PageIconsContainer = styled.div`
	max-width: 7.5rem;
	overflow: auto;

	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 0.5rem;

	&::-webkit-scrollbar {
		height: 3rem;
	}

	&::-webkit-scrollbar-thumb {
		border-radius: 6px;

		// to add margin
		box-shadow: inset 0 0 10px 10px gray;
		border: 1rem solid transparent;
	}

	::-webkit-scrollbar-track {
		border-radius: 6px;

		box-shadow: inset 0 0 10px 10px white;
		border: 1rem solid transparent;
	}

	button {
		background: transparent;
	}
`;

interface IPageIconProps {
	isActive: boolean;
}

export const PageIcon = styled.div<IPageIconProps>`
	width: 2.5rem;

	height: 2.5rem;

	border-radius: 6px;

	font-weight: bold;

	text-align: center;
	line-height: 2.5rem;

	background: ${props =>
		props.isActive ? props.theme['green-700'] : props.theme['gray-600']};

	color: ${props =>
		props.isActive ? props.theme['gray-100'] : props.theme['gray-400']};

	&:focus {
		box-shadow: none;
		outline: none;
	}
`;
