import { CaretLeft, CaretRight } from 'phosphor-react';
import { range } from '../../utils/range';
import { PageIcon, PageIconsContainer, PaginationContainer } from './styles';

interface IPaginationProps {
	activePage: number;
	setActivePage: React.Dispatch<React.SetStateAction<number>>;
	transactionsCount: number;
}

export function Pagination({
	activePage,
	setActivePage,
	transactionsCount,
}: IPaginationProps) {
	const totalPages = Math.ceil(transactionsCount / 10);
	const pageIcons = range(1, totalPages + 1);

	function handleGoToNextPage() {
		if (activePage + 1 > totalPages) return;

		setActivePage(prevState => prevState + 1);
	}

	function handleGoToPreviousPage() {
		if (activePage - 1 < 1) return;

		setActivePage(prevState => prevState - 1);
	}

	function handleGoToPage(page: number) {
		setActivePage(page);
	}

	return (
		<PaginationContainer>
			<button
				type="button"
				disabled={activePage - 1 === 0}
				onClick={handleGoToPreviousPage}
			>
				<CaretLeft weight="bold" size={24} />
			</button>

			<PageIconsContainer>
				{pageIcons?.map(pageIndex => {
					return (
						<button
							key={pageIndex}
							type="button"
							onClick={() => handleGoToPage(pageIndex)}
						>
							<PageIcon isActive={pageIndex === activePage}>
								{pageIndex}
							</PageIcon>
						</button>
					);
				})}
			</PageIconsContainer>

			<button
				type="button"
				disabled={activePage + 1 > totalPages}
				onClick={handleGoToNextPage}
			>
				<CaretRight weight="bold" size={24} />
			</button>
		</PaginationContainer>
	);
}
