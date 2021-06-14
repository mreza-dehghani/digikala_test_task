import { Link } from 'react-router-dom';
import { Card, CardHeader, CardBody } from './style';
import StarRate from '../../../../components/starRate';

const Index = ({ imgPath, description, id, exist, price, rate }) => {
	return (
		<Card>
			<Link to={`/product/${id}`}>
				<CardHeader>
					<img src={imgPath} alt={description} className="product-img" />
				</CardHeader>
				<CardBody>
					<span className="description">{description}</span>
					<div className="rate">
						<StarRate onChange={() => null} value={rate} count={5} size={'1.2rem'} />
						<span>{exist ? 'موجود در انبار' : 'ناموجود'}</span>
					</div>
					<div className="price">{`${price} تومان`} </div>
				</CardBody>
			</Link>
		</Card>
	);
};

export default Index;
