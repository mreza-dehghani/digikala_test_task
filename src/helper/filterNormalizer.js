const filterNormalizer = data => {
	let normalizedFilter = {};

	if (data) {
		normalizedFilter = {
			price: {
				min: data.price.min,
				max: data.price.max,
			},
			hasSell: data.has_selling_stock,
			q: data.q || '',
			page: data.page,
			rows: data.rows,
		};
	}
	return normalizedFilter;
};

export default filterNormalizer;
