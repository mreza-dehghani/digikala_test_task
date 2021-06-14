import { connect } from 'react-redux';
import { ContainerFluid, Main, Sidebar } from './style';
import Filter from '../../components/filter';
import ProductCard from './components/productCard';
import { useEffect, useState } from 'react';
import convertJsonToQueryString from '../../helper/convertJsonToQueryString';
import convertStringToBoolean from '../../helper/convertStringToBoolean';
import * as QueryString from 'query-string';
import { History } from '../../helper/history';
import { ProductAction } from '../../actions';
import Pagination from '../../components/pagination';
import FullScreenLoading from '../../components/fullScreenLoading';
import getProductRate from '../../helper/getProductRate';

const Products = props => {
	const { loading, products, getProductsByFilter, clearData } = props;
	const [filter, setFilter] = useState({
		page: 1,
		price: {
			min: 0,
			max: 10000,
		},
		rows: 9,
		has_selling_stock: true,
		q: '',
	});

	const getParams = async query => {
		const params = await QueryString.parse(query);
		return params;
	};

	useEffect(() => {
		const query = window.location.search.substring(1, window.location.search.length);

		if (query) {
			getDataWithQuery(query);
		} else {
			getProductsByFilter(convertJsonToQueryString(filter));
		}
	}, [window.location.search]);

	useEffect(() => {
		return () => {
			clearData();
		};
	}, []);

	const getDataWithQuery = query => {
		let price = {};

		getParams(query)
			.then(param => {
				Object.keys(param).forEach(item => {
					if (item.includes('price')) {
						let property = item.substring(6, 9);
						price[property] = param[item];
					}
				});
				return param;
			})
			.then(param => {
				setFilter({
					...filter,
					page: param.page,
					rows: param.rows,
					has_selling_stock: convertStringToBoolean(param.hasSell),
					q: param.q,
					price: price,
				});
			})
			.then(() => getProductsByFilter(query));
	};

	const filterSubmit = values => {
		const params = {
			...filter,
			has_selling_stock: values.hasSell,
			price: {
				min: values.price.min,
				max: values.price.max,
			},
			q: values.q,
		};
		console.log(values);
		History.push(`/products?${convertJsonToQueryString(params)}`);
	};

	const pageChangeHandler = ({ selected }) => {
		const param = {
			...filter,
			page: selected + 1,
		};
		History.push(`/products?${convertJsonToQueryString(param)}`);
	};

	return (
		<ContainerFluid>
			<Sidebar>
				<Filter formData={filter} submit={filterSubmit} />
			</Sidebar>
			<Main>
				<div className="title">{products?.filters?.has_selling_stock?.title}</div>
				{Object.keys(products).length !== 0 && (
					<>
						<ul className="products">
							{products &&
								products.products.map((item, key) => {
									return (
										<ProductCard
											key={item.id}
											imgPath={item.images.main}
											description={item.title}
											id={item.id}
											price={item.price.selling_price}
											rate={getProductRate(item.rating.rate, 5)}
										/>
									);
								})}
						</ul>
						<Pagination
							totalPage={products?.pager?.total_pages}
							currentPage={products?.pager?.current_page}
							pageChangeHandler={pageChangeHandler}
						/>
					</>
				)}
				{loading && <FullScreenLoading />}
			</Main>
		</ContainerFluid>
	);
};

const mapStateToProps = state => {
	return {
		loading: state.Product.getProductsByFilter.loading,
		products: state.Product.getProductsByFilter.data,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		getProductsByFilter: postData => dispatch(ProductAction.getProductsByFilter(postData)),
		clearData: () => {
			dispatch(ProductAction.getProductsByFilterFailure());
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
