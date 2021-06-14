import styled from 'styled-components';
import { pxToRem } from '../../../../helper/style';
import variables from '../../../../constants/styleVariables';

export const Card = styled.li`
	width: ${pxToRem(290)}rem;
	height: ${pxToRem(300)}rem;
	background-color: ${variables.colors.white};
	border-style: solid;
	border-color: ${variables.colors.Alto};
	border-width: 0 0 1px 1px;

	flex: 1 0 25%;

	transition: 0.2s all;

	& > a {
		color: ${variables.colors.SilverChalice};
	}
`;

export const CardHeader = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	.product-img {
		width: ${pxToRem(200)}rem;
		object-fit: contain;
	}
`;

export const CardBody = styled.div`
	//position: absolute;
	//bottom: 0;
	width: 100%;
	text-align: right;
	padding-bottom: ${pxToRem(20)}rem;
	display: block; /* or inline-block */
	text-overflow: ellipsis;
	word-wrap: break-word;
	overflow: hidden;
	//max-height: ${pxToRem(62)}rem;
	line-height: 1.8em;
	font-size: ${variables.fontSize.sm};

	.description {
		padding: 0 ${pxToRem(20)}rem;
	}

	.rate {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 ${pxToRem(20)}rem;
		color: ${variables.colors.black};
	}

	.price {
		text-align: left;
		padding: 0 ${pxToRem(20)}rem;
		color: ${variables.colors.black};
	}
`;
