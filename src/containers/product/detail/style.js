import styled from 'styled-components';
import { pxToRem } from '../../../helper/style';

export const Container = styled.div`
	width: 100%;
	max-width: ${pxToRem(1140)}rem;
	margin: auto;
	padding: 0;
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
`;
