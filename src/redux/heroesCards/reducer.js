import {
	GET_HEROES_REQUEST,
	GET_HEROES_SUCCESS,
	GET_HEROES_FAILURE,
} from './actions';

const initialState = { heroes: [], loading: false };

export default function heroesReducer(state = initialState, action) {
	switch (action.type) {
		case GET_HEROES_REQUEST:
			return {
				...state,
				loading: true,
			};
		case GET_HEROES_SUCCESS:
			return {
				...state,
				heroes: action.heroes,
				loading: false,
			};
		case GET_HEROES_FAILURE:
			return {
				...state,
				loading: false,
				error: action.error,
			};
		default:
			return state;
	}
}
