import { getHeroes } from '../../api/heroes.api';
import {
	getHeroesFailure,
	getHeroesRequest,
	getHeroesSuccess,
} from '../heroesCards/actions';

export const fetchHeroes = (urlForFetchingHeroes) => (dispatch) => {
	dispatch(getHeroesRequest());
	try {
		getHeroes(urlForFetchingHeroes).then(({ results }) =>
			dispatch(getHeroesSuccess(results))
		);
	} catch (error) {
		dispatch(getHeroesFailure(error));
	}
};
