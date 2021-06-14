import { takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import * as types from '../constants/actionTypes';
import { ProductAction } from '../actions';
import * as productApi from '../apis/product';

export function* watcherProduct() {
	yield takeLatest(types.GET_PRODUCTS_BY_FILTER_REQUEST, workerGetProductsByFilter);
	yield takeLatest(types.GET_PRODUCT_DETAIL_REQUEST, workerGetProductDetail);
}

function getProductsByFilter(postData) {
	return productApi.getProductsByFilterService(postData);
}
function* workerGetProductsByFilter(action) {
	try {
		const response = yield call(getProductsByFilter, action.postData);
		const data = response && response.data && response.data.data;
		yield put(ProductAction.getProductsByFilterSuccess(data));
	} catch (error) {
		if (error) {
			toast.error('error!');
		}
		console.log(error);
		yield put(ProductAction.getProductsByFilterFailure());
	}
}

function getProductDetail(postData) {
	return productApi.getProductDetailService(postData);
}
function* workerGetProductDetail(action) {
	try {
		const response = yield call(getProductDetail, action.postData);
		const data = response && response.data;
		yield put(ProductAction.getProductDetailSuccess(data));
	} catch (error) {
		if (error) {
			toast.error('error!');
		}
		console.log(error);
		yield put(ProductAction.getProductDetailFailure());
	}
}
