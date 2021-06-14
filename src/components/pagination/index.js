import React from 'react';
import ReactPaginate from 'react-paginate';
import { PaginationWrapper } from './style';

const Index = ({ totalPage, currentPage, pageChangeHandler }) => {
	return (
		<PaginationWrapper>
			<ReactPaginate
				pageCount={totalPage}
				pageRangeDisplayed={5}
				marginPagesDisplayed={1}
				forcePage={currentPage - 1}
				containerClassName={'pagination'}
				pageClassName={'page-item'}
				pageLinkClassName={'page-link'}
				activeClassName={'active'}
				previousLinkClassName={'page-link'}
				nextLinkClassName={'page-link'}
				previousClassName={'page-item'}
				nextClassName={'page-item'}
				previousLabel={'PERV'}
				nextLabel={'NEXT'}
				onPageChange={selected => pageChangeHandler(selected)}
			/>
		</PaginationWrapper>
	);
};

export default Index;
