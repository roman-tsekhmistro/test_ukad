export function getHeroes(urlForFetchingHeroes) {
	return fetch(urlForFetchingHeroes)
		.then((results) => results.json())
		.then(({ data }) => data);
}
