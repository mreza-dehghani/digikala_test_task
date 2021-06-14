import { connect } from 'react-redux';
import Modal from '../../components/modal';
import img from '../../assets/img/png/bitmap.png';
import { Item } from './style';
import Button from '../../components/button';
import { CartAction } from '../../actions';

const Index = ({ show, closeHandler, items, totalPrice, removeFromCart, payment }) => {
	return (
		<Modal show={show} close={true} header={{ title: 'سبد خرید' }} loading={false} closeHandler={closeHandler}>
			{items &&
				items.map((item, key) => {
					return (
						<Item>
							<div className="info">
								<img src={item.img} alt="test" className="product-img" />
								<p className="product-name">{item.title}</p>
							</div>
							<Button type="danger" size="sm" onClick={() => removeFromCart(item)} loading={false}>
								حذف از سبد خرید
							</Button>
						</Item>
					);
				})}
			<div style={{ padding: '10px' }}>{totalPrice !== 0 ? `${totalPrice} مجموع قیمت` : 'سبد خرید خالی است!'}</div>
			{totalPrice !== 0 && (
				<Button
					type="primary"
					size="sm"
					onClick={() => {
						payment();
						closeHandler();
					}}
					loading={false}
				>
					پرداخت
				</Button>
			)}
		</Modal>
	);
};

const mapStateToProps = state => {
	return {
		items: state.Cart.cartItems.products,
		totalPrice: state.Cart.cartItems.totalPrice,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		removeFromCart: id => dispatch(CartAction.removeItemFromCart(id)),
		payment: () => dispatch(CartAction.payment()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
