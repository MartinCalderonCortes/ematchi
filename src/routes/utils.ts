/* Fisher-Yates shuffle algorithm (to random a finite sequence in place)*/
export function shuffle<T>(array: T[]) {
	let i = array.length;

	while (i--) {
		const j = Math.floor(Math.random() * (i + 1));
		// const temp = array[i];
		// array[i] = array[j];
		// array[j] = temp;
		[array[i], array[j]] = [array[j], array[i]];
	}

	return array;
}

export function getTwemojiURL(emoji: string) {
	const code = [...emoji].map((char) => char.codePointAt(0)!.toString(16)).join('-');
	return `/twemoji/${code}.svg`;
}
