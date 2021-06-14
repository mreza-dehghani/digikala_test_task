import styled from 'styled-components';
import { pxToRem } from '../../helper/style';
import variables from '../../constants/styleVariables';

export const ContainerFluid = styled.div`
	width: 100%;
	margin: 0;
	padding: 0;
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
`;

export const Main = styled.div`
	//width: 80%;
	flex: 0 0 77%;
	border-style: solid;
	border-color: ${variables.colors.Alto};
	border-width: 1px 1px 0 0;
	background-color: ${variables.colors.white};
	margin: 10px;

	.title {
		color: ${variables.colors.black};
		padding: ${pxToRem(5)}rem;
		font-size: ${variables.fontSize.base};
		padding: ${pxToRem(24)}rem ${pxToRem(6)}rem;
		border-style: solid;
		border-color: ${variables.colors.Alto};
		border-width: 0 0 0 1px;
	}

	.products {
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		flex-wrap: wrap;
		border-style: solid;
		border-color: ${variables.colors.Alto};
		border-width: 1px 0 0 0;
		list-style: none;
		padding: 0;
		margin: 0;
	}
`;

export const Sidebar = styled.div`
	//width: 20%;
	flex: 0 0 20%;

	background-color: ${variables.colors.white};
	//height: calc(100vh - 62px);
	//padding: ${pxToRem(5)}rem;
	margin: 10px;
	border: 1px solid ${variables.colors.Alto};
`;
