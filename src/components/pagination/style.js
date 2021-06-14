import styled from 'styled-components';
import { pxToRem } from '../../helper/style';

export const PaginationWrapper = styled.nav`
	width: ${pxToRem(300)}rem;
	margin: auto;

	ul {
		list-style: none;
		display: flex;
		justify-content: center;
		align-items: center;

		li {
			width: ${pxToRem(50)}rem;
			background: aliceblue;
			padding: 10px;
			transition: 0.2s all;
			cursor: pointer;
			text-align: center;

			&:hover {
				background-color: #34bea5;
			}

			.page-link {
				padding: ${pxToRem(10)}rem;
			}
		}
	}
`;
