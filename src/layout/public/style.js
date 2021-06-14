import styled from 'styled-components';
import { pxToRem } from '../../helper/style';
import variables from '../../constants/styleVariables';

export const ContainerFluid = styled.div`
	width: 100%;
	margin: 0;
	padding: 0;
`;

export const Main = styled.div`
	width: 100%;
	margin: ${pxToRem(89)}rem auto 0 auto;
	min-height: 600px;
`;

export const Header = styled.div`
	width: 100%;
	height: ${pxToRem(62)}rem;
	background-color: ${variables.colors.white};
	position: fixed;
	right: 0;
	top: 0;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	z-index: 999;
	box-shadow: 0 ${pxToRem(6)}rem ${pxToRem(30)}rem ${variables.colors.SilverChalice};
	.header-container {
		width: 100%;
		max-width: ${pxToRem(1450)}rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: auto;
		padding: 0 ${pxToRem(10)}rem;

		.app-title {
			color: ${variables.colors.Danger};
			font-size: ${variables.fontSize['4xl']};
			font-weight: ${variables.fontWeight.semibold};
		}

		.app-cart-icon {
			font-size: ${variables.fontSize['2xl']};
			color: ${variables.colors.Danger};
		}
	}
`;
