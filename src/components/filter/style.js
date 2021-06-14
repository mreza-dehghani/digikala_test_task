import styled from 'styled-components';
import { pxToRem } from '../../helper/style';

export const Wrapper = styled.div`
	//width: auto;
	//height: auto;

	.form {
		padding: ${pxToRem(14)}rem;

		.__price-field-wrapper {
			display: flex;
			justify-content: flex-start;
			align-items: center;

			.__price-field {
				padding: 0 ${pxToRem(4)}rem;
			}
		}
	}

	.submit-btn-wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: ${pxToRem(14)}rem;
	}
`;
