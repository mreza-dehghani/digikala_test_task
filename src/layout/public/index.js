import React, { Suspense, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/header';
import { Main, ContainerFluid } from './style';
import Cart from '../../containers/cart';
import SuccessPayment from '../../components/successPaymentModal';
import { CartAction } from '../../actions';

const Index = ({ Component, route }) => {
	const [showCart, setShowCart] = useState(false);
	const successPaymentModal = useSelector(state => state.Cart.showSuccessPaymentModal);
	const productCounts = useSelector(state => state.Cart.cartItems.count);
	const dispatch = useDispatch();

	const toggleCart = () => setShowCart(!showCart);

	return (
		<ContainerFluid>
			<Cart show={showCart} closeHandler={toggleCart} />
			<SuccessPayment
				show={successPaymentModal.show}
				closeHandler={() => dispatch(CartAction.hideSuccessPaymentModal())}
				content={successPaymentModal.content}
				title={successPaymentModal.title}
			/>
			<Header toggleCart={toggleCart} productCounts={productCounts} />
			<Main>
				<Suspense fallback={<div>Loading ...</div>}>
					<Component route={route} />
				</Suspense>
			</Main>
		</ContainerFluid>
	);
};

export default Index;
