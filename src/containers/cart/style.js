import styled from 'styled-components';
import { pxToRem } from '../../helper/style';
import variables from '../../constants/styleVariables';

export const Item = styled.div`
	padding: ${pxToRem(12)}rem;
	display: flex;
	justify-content: space-between;
	align-items: center;

	.info {
		display: flex;
		justify-content: flex-start;
		align-items: center;

		.product-img {
			width: ${pxToRem(86)}rem;
		}

		.product-name {
			font-size: ${variables.fontSize.base};
			font-weight: ${variables.fontWeight.semibold};
			color: ${variables.colors.black};
		}
	}
`;
