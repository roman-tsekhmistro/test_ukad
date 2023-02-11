export const GET_HEROES_REQUEST = 'GET_HEROES_REQUEST';
export const GET_HEROES_SUCCESS = 'GET_HEROES_SUCCESS';
export const GET_HEROES_FAILURE = 'GET_HEROES_FAILURE';

export const getHeroesRequest = () => ({ type: GET_HEROES_REQUEST });
export const getHeroesSuccess = (heroes) => ({
	type: GET_HEROES_SUCCESS,
	heroes,
});
export const getHeroesFailure = (error) => ({
	type: GET_HEROES_FAILURE,
	error,
});
