import styled from 'styled-components';

export const HeaderContainer = styled.header`
	padding: 2.5rem 0 7.5rem;

	background: ${props => props.theme['gray-900']};
`;

export const HeaderContent = styled.div`
	width: 100%;
	max-width: 1120px;

	margin: 0 auto;

	display: flex;
	align-items: center;
	justify-content: space-between;
`;
