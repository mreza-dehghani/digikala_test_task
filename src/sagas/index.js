import { all } from 'redux-saga/effects';
import { watcherProduct } from './product';

export default function* rootSaga() {
	yield all([watcherProduct()]);
}
