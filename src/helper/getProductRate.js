const getProductRate = (rateOfPercent, total) => {
	return (Math.round(rateOfPercent) * total) / 100;
};

export default getProductRate;
