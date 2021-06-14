import { ApiCaller } from '../helper/apiCaller';

export const getProductsByFilterService = query => {
	return ApiCaller().get(`${process.env.REACT_APP_API_URL}/search/?${query}`);
};

export const getProductDetailService = postData => {
	return ApiCaller().get(`${process.env.REACT_APP_API_URL}/product/${postData}`);
};
