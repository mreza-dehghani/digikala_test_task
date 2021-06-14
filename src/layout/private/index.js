import { Suspense } from 'react';

const Index = ({ Component, route }) => {
	return (
		<div>
			<main>
				<Suspense fallback={<div>Loading ...</div>}>
					<Component route={route} />
				</Suspense>
			</main>
		</div>
	);
};

export default Index;
