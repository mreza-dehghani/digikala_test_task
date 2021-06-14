import { Header } from '../../style';
import { Link } from 'react-router-dom';

const Index = ({ toggleCart, productCounts }) => {
	return (
		<Header>
			<div className="header-container">
				<Link to="/">
					<div className="app-title">دیجی کالا</div>
				</Link>
				<div onClick={toggleCart} className="pointer app-cart-icon">
					<i className="fa fa-cart-plus" />
					<span>{productCounts}</span>
				</div>
			</div>
		</Header>
	);
};

export default Index;
