import * as types from '../constants/actionTypes';

export const getProductsByFilter = postData => {
	return {
		type: types.GET_PRODUCTS_BY_FILTER_REQUEST,
		postData,
	};
};
export const getProductsByFilterSuccess = data => {
	return {
		type: types.GET_PRODUCTS_BY_FILTER_SUCCESS,
		payload: data,
	};
};
export const getProductsByFilterFailure = () => {
	return {
		type: types.GET_PRODUCTS_BY_FILTER_FAILURE,
	};
};

export const getProductDetail = postData => {
	return {
		type: types.GET_PRODUCT_DETAIL_REQUEST,
		postData,
	};
};
export const getProductDetailSuccess = data => {
	return {
		type: types.GET_PRODUCT_DETAIL_SUCCESS,
		payload: data,
	};
};
export const getProductDetailFailure = () => {
	return {
		type: types.GET_PRODUCT_DETAIL_FAILURE,
	};
};
