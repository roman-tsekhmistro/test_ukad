import Heroes from '../pages/Heroes';
import HomePage from '../pages/Home/HomePage';

const routes = [
	{ path: '/', element: <HomePage /> },
	{ path: '/heroes', element: <Heroes /> },
];

export default routes;
