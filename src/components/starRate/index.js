import Variables from '../../constants/styleVariables';

const wrapper = {
	display: 'flex',
	justifyContent: 'flex-start',
	alignItems: 'center',
};

const Index = ({ count, value, onChange, size }) => {
	const stars = Array.from({ length: count }, () => '☆');

	const handleChange = value => {
		onChange(value);
	};

	return (
		<div style={wrapper}>
			{stars.map((star, index) => {
				let style = Variables.colors.Mercurysolid;

				if (index < value) {
					style = Variables.colors.BrightSun;
					star = '★';
				}
				return (
					<span
						key={index}
						onClick={() => handleChange(index + 1)}
						style={{ color: style, width: size + 1, height: size + 1, fontSize: size, cursor: 'pointer' }}
					>
						{star}
					</span>
				);
			})}
		</div>
	);
};

export default Index;
