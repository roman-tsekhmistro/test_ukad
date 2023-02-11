import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BasicLayout from '../components/Layout';
import routes from '../api/routes';

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				{routes.map((route, index) => (
					<Route
						key={index}
						path={route.path}
						element={<BasicLayout>{route.element}</BasicLayout>}
					/>
				))}
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
