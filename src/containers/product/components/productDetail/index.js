import { Card, ProductImg, ProductDescription, ProductTitle } from './style';
import StarRate from '../../../../components/starRate';
import Button from '../../../../components/button';

const Index = ({ imgPath, description, exist, price, rate, addToCart }) => {
	return (
		<Card>
			<ProductImg src={imgPath} alt={description} className="product-img" />

			<ProductDescription>
				<ProductTitle>{description}</ProductTitle>
				<StarRate onChange={() => null} value={rate} count={5} size={'1.2rem'} />
				<div className="pricing">
					<span>{exist ? 'موجود در انبار' : 'ناموجود'}</span>
					<div className="price">{price}تومان</div>
				</div>

				<Button type="danger" size="sm" onClick={addToCart} loading={false}>
					اضافه به سبد خرید
				</Button>
			</ProductDescription>
		</Card>
	);
};

export default Index;
