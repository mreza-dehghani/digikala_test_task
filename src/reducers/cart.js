import * as types from '../constants/actionTypes';

const initialState = {
	cartItems: {
		count: 0,
		products: [],
		totalPrice: 0,
	},
	showSuccessPaymentModal: {
		show: false,
		content: 'خرید شما با موفقیت پرداخت شد',
		title: 'خرید',
	},
};

const addUniqItem = (item, data) => {
	const repeated = data.products.some(i => i.id === item.id);
	if (repeated) {
		return { products: data.products, totalPrice: data.totalPrice, count: data.count };
	}
	return { products: [...data.products, item], totalPrice: data.totalPrice + item.price, count: data.count + 1 };
};

const Cart = (state = initialState, { type, payload }) => {
	switch (type) {
		case types.ADD_ITEM_TO_CART:
			return {
				...state,
				cartItems: addUniqItem(payload, state.cartItems),
			};
		case types.REMOVE_ITEM_FROM_CART:
			return {
				...state,
				cartItems: {
					products: state.cartItems.products.filter(item => item.id !== payload.id),
					count: state.cartItems.count - 1,
					totalPrice: state.cartItems.totalPrice - payload.price,
				},
			};

		case types.PAYMENT:
			return {
				...state,
				cartItems: {
					count: 0,
					products: [],
					totalPrice: 0,
				},
				showSuccessPaymentModal: { ...state.showSuccessPaymentModal, show: true },
			};

		case types.SHOW_SUCCESS_PAYMENT_MODAL:
			return {
				...state,
				showSuccessPaymentModal: { ...state.showSuccessPaymentModal, show: true },
			};
		case types.HIDE_SUCCESS_PAYMENT_MODAL:
			return {
				...state,
				showSuccessPaymentModal: { ...state.showSuccessPaymentModal, show: false },
			};

		default:
			return state;
	}
};

export default Cart;
