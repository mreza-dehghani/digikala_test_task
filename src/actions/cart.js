import * as types from '../constants/actionTypes';

export const addItemToCart = payload => {
	return {
		type: types.ADD_ITEM_TO_CART,
		payload,
	};
};
export const removeItemFromCart = payload => {
	return {
		type: types.REMOVE_ITEM_FROM_CART,
		payload,
	};
};

export const showSuccessPaymentModal = () => {
	return {
		type: types.SHOW_SUCCESS_PAYMENT_MODAL,
	};
};
export const hideSuccessPaymentModal = () => {
	return {
		type: types.HIDE_SUCCESS_PAYMENT_MODAL,
	};
};

export const payment = () => {
	return {
		type: types.PAYMENT,
	};
};
