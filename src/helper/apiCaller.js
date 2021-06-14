import axios from 'axios';

export const ApiCaller = () => {
	const axiosInstance = axios.create({
		headers: {
			// 'Content-Type': 'application/json',
			// 'Access-Control-Allow-Origin': '*',
			// 'Access-Control-Allow-Methods': '*',
			// 'Access-Control-Allow-Headers': '*',
		},
		responseType: 'json',
	});

	axiosInstance.interceptors.request.use(
		config => {
			const token = 'mpfKW9ghVTCSuBZ7qTkSmEyvL38ShZxv';

			config.headers['token'] = `${token}`;

			return config;
		},
		error => {
			Promise.reject(error);
		}
	);

	axiosInstance.interceptors.request.use(
		response => {
			return response;
		},
		error => {
			const { response, data } = error;
			if (response) {
				Promise.reject(response);
			}
			if (data) {
				Promise.reject(data);
			}
			return Promise.reject(error);
		}
	);

	return axiosInstance;
};
