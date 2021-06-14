import { useEffect } from 'react';
import { useParams } from 'react-router';
import { connect } from 'react-redux';
import { Container } from './style';
import ProductDetail from '../components/productDetail';
import { CartAction, ProductAction } from '../../../actions';
import FullScreenLoading from '../../../components/fullScreenLoading';

const Index = props => {
	const { loading, product, getProductDetail, addItemToCart, clearData } = props;
	const { id } = useParams();

	useEffect(() => {
		getProductDetail(id);
		return () => {
			clearData();
		};
	}, []);

	const addToCartHandler = item => {
		if (item) {
			addItemToCart(item);
		} else {
			console.log('no id');
		}
	};

	return (
		<Container>
			{Object.keys(product).length !== 0 && (
				<ProductDetail
					price={product?.price?.selling_price}
					imgPath={product?.images?.main}
					description={product?.product?.title}
					exist={true}
					rate={getProductDetail(product?.rating?.rate)}
					addToCart={() => addToCartHandler(product?.id)}
				/>
			)}
			{loading && <FullScreenLoading />}
		</Container>
	);
};

const mapStateToProps = state => {
	return {
		loading: state.Product.getProductDetail.loading,
		product: state.Product.getProductDetail.data,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		getProductDetail: postData => dispatch(ProductAction.getProductDetail(postData)),
		addItemToCart: item => dispatch(CartAction.addItemToCart(item)),
		clearData: () => {
			dispatch(ProductAction.getProductDetailFailure());
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
