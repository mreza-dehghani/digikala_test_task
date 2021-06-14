import * as types from '../constants/actionTypes';

const initialState = {
	getProductsByFilter: {
		loading: false,
		data: {},
	},
	getProductDetail: {
		loading: false,
		data: {},
	},
};

const Product = (state = initialState, { type, payload }) => {
	switch (type) {
		case types.GET_PRODUCTS_BY_FILTER_REQUEST:
			return {
				...state,
				getProductsByFilter: { ...state.getProductsByFilter, loading: true },
			};
		case types.GET_PRODUCTS_BY_FILTER_SUCCESS:
			return {
				...state,
				getProductsByFilter: { data: payload, loading: false },
			};
		case types.GET_PRODUCTS_BY_FILTER_FAILURE:
			return {
				...state,
				getProductsByFilter: { data: {}, loading: false },
			};

		case types.GET_PRODUCT_DETAIL_REQUEST:
			return {
				...state,
				getProductDetail: { ...state.getProductDetail, loading: true },
			};
		case types.GET_PRODUCT_DETAIL_SUCCESS:
			return {
				...state,
				getProductDetail: { data: payload, loading: false },
			};
		case types.GET_PRODUCT_DETAIL_FAILURE:
			return {
				...state,
				getProductDetail: { data: {}, loading: false },
			};

		default:
			return state;
	}
};

export default Product;
