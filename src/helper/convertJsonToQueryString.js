const convertJsonToQueryString = json => {
	let queryString = '';
	let withObjString = '';
	const stringCount = Object.keys(json).length - 1;

	Object.keys(json).forEach((item, index) => {
		if (json[item] !== '') {
			if (json[item] instanceof Object) {
				withObjString = convertJsonObjToQueryString(json[item], item);
			} else {
				queryString += `${item}=${json[item]}${index < stringCount ? '&' : ''}`;
			}
		}
	});
	return queryString + withObjString;
};

const convertJsonObjToQueryString = (json, _item) => {
	let queryString = '&';
	const stringCount = Object.keys(json).length - 1;

	Object.keys(json).forEach((item, index) => {
		if (json[item] !== '') {
			queryString += `${_item}[${item}]=${json[item]}${index < stringCount ? '&' : ''}`;
		}
	});
	return queryString;
};

export default convertJsonToQueryString;
