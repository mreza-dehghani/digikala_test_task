import { Switch, Route } from 'react-router-dom';
import { PublicLayout, PrivateLayout } from '../../layout';
import { ConnectedRouter } from 'connected-react-router';
import { History } from '../../helper/history';
import Routes from '../../router';
import { withRouter } from 'react-router';
import NotFound from '../../components/notFound';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import '../../style/global/index.css';
import 'font-awesome/css/font-awesome.min.css';

const App = () => {
	const layoutManager = (item, key) => {
		switch (item.layout) {
			case 'private':
				return (
					<Route
						key={key}
						exact={true}
						strict={true}
						path={item.path}
						render={withRouter(route => (
							<PrivateLayout route={route} Component={item.component} options={item.options || {}} />
						))}
					/>
				);
			case 'public':
				return (
					<Route
						key={key}
						exact={true}
						strict={true}
						path={item.path}
						render={withRouter(route => (
							<PublicLayout route={route} Component={item.component} options={item.options || {}} />
						))}
					/>
				);
			default:
				return (
					<Route key={key} exact={true} path={item.path} component={item.component} options={item.options || {}} />
				);
		}
	};

	const switchRoutes = () => {
		return Routes.map((route, key) => {
			return layoutManager(route, key);
		});
	};

	return (
		<ConnectedRouter history={History}>
			<ToastContainer
				position="bottom-right"
				autoClose={parseInt(process.env.REACT_APP_TOASTER_CLOSE_TIMEOUT, 10)}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
			<Switch>
				{switchRoutes()}
				<Route component={NotFound} />
			</Switch>
		</ConnectedRouter>
	);
};

export default App;
