import React from 'react';

const Products = React.lazy(() => import('../containers/product'));
const ProductDetail = React.lazy(() => import('../containers/product/detail'));

export const publicRoute = [
	{
		path: '/',
		layout: 'public',
		component: Products,
	},
	{
		path: '/products',
		layout: 'public',
		component: Products,
	},
	{
		path: '/product/:id',
		layout: 'public',
		component: ProductDetail,
	},
];
