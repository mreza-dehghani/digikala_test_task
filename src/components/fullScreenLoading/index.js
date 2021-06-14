import React from 'react';
import { FullPageLoadingWrapper } from './style';
import spinner from '../../assets/img/spinner.svg';

const Index = () => {
	return (
		<FullPageLoadingWrapper>
			<div className="containerStyles">
				<div className="loaderStyles">
					<img src={spinner} alt="Loading..." />
				</div>
			</div>
		</FullPageLoadingWrapper>
	);
};

export default Index;
