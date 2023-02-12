import styled from 'styled-components';

export const SummaryContainer = styled.div`
	max-width: 1120px;

	display: grid;
	grid-template-columns: repeat(auto-fit, 352px);
	align-items: center;
	gap: 2rem;

	margin: -5rem auto 0;
`;

interface ISummaryCardProps {
	variant?: 'green';
}

export const SummaryCard = styled.div<ISummaryCardProps>`
	background: ${props =>
		props.variant === 'green'
			? props.theme['green-700']
			: props.theme['gray-600']};

	border-radius: 6px;

	padding: 1.5rem;
	padding-left: 2rem;

	strong {
		display: block;

		font-weight: bold;
		font-size: 2rem;

		color: ${props => props.theme['gray-100']};

		margin-top: 1rem;

		line-height: 140%;
	}
`;

interface ISummaryCardHeaderProps {
	iconColor: 'red-500' | 'green-300' | 'white';
}

export const SummaryCardHeader = styled.header<ISummaryCardHeaderProps>`
	display: flex;
	align-items: flex-start;
	justify-content: space-between;

	color: ${props => props.theme['gray-300']};

	svg {
		color: ${props => props.theme[props.iconColor]};
	}
`;
