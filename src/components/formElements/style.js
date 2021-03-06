import styled from 'styled-components';
import variables from '../../constants/styleVariables';
import { pxToRem } from '../../helper/style';

export const FormLabelElement = styled.div`
	width: 100%;
	font-size: ${variables.fontSize.base};
	font-weight: ${variables.fontWeight.semibold};
	margin: ${pxToRem(10)}rem 0;
`;

export const FormInputElement = styled.input`
	width: 96%;
	font-size: ${variables.fontSize.sm};
	font-weight: ${variables.fontWeight.normal};
	padding: ${pxToRem(12)}rem ${pxToRem(6)}rem;
	border: 1px solid ${variables.colors.Gray};
	border-radius: ${pxToRem(2)}rem;
	margin: ${pxToRem(10)}rem 0;
	box-shadow: 0 0 1px ${variables.colors.Silver};
	&:focus {
		outline: none;
	}
`;

export const FormGroupElement = styled.div`
	width: 100%;
`;

export const FormTextElement = styled.p`
	width: 100%;
	color: ${variables.colors.VividTangerine};
	font-size: ${variables.fontSize.sm};
`;

export const CheckboxFormGroupElement = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;

export const CheckBoxLabelElement = styled.div`
	font-size: ${variables.fontSize.base};
	font-weight: ${variables.fontWeight.semibold};
	margin: ${pxToRem(10)}rem 0;
`;
