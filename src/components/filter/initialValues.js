const initialValues = formData => {
	return {
		price: {
			min: 0,
			max: 10000,
		},
		hasSell: false,
		q: '',
		...formData,
	};
};

export default initialValues;
