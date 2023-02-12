import logoPath from '../../assets/Logo.svg';
import { NewTransactionModal } from '../NewTransactionModal';
import { HeaderContainer, HeaderContent } from './styles';

export function Header() {
	return (
		<HeaderContainer>
			<HeaderContent>
				<img src={logoPath} alt="DT Money logo" />

				<NewTransactionModal />
			</HeaderContent>
		</HeaderContainer>
	);
}
