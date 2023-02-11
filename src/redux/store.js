import { applyMiddleware, createStore } from 'redux';
import productsReducer from './heroesCards/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

export const store = createStore(
	productsReducer,
	composeWithDevTools(applyMiddleware(thunk))
);
