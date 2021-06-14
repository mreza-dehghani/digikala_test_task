import styled from 'styled-components';
import { pxToRem } from '../../../../helper/style';
import variables from '../../../../constants/styleVariables';

export const Card = styled.div`
	min-height: ${pxToRem(390)}rem;
	background-color: ${variables.colors.white};
	border: 1px solid ${variables.colors.Alto};
	width: 100%;
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
`;

export const ProductImg = styled.img`
	flex: 0 0 30%;
	margin: auto;
`;

export const ProductDescription = styled.div`
	flex: 0 0 60%;
	margin: auto;
	padding-right: ${pxToRem(20)}rem;

	.pricing {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: ${pxToRem(32)}rem 0;

		.price {
			background-color: ${variables.colors.AthensGray};
			padding: ${pxToRem(8)}rem ${pxToRem(16)}rem;
			border-radius: 12px;
		}
	}
`;

export const ProductTitle = styled.p`
	color: ${variables.colors.black};
	font-size: ${variables.fontSize.xl};
	font-weight: ${variables.fontWeight.semibold};
`;
