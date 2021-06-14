import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from '../helper/history';
import Product from './product';
import Cart from './cart';

export default () =>
	combineReducers({
		router: connectRouter(History),
		Product,
		Cart,
	});
