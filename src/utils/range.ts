export function range(from: number, to: number): number[] | undefined {
	if (from < 1) return;

	const rangeArray = [];

	for (let i = from; i < to; i++) {
		rangeArray.push(i);
	}

	return rangeArray;
}
