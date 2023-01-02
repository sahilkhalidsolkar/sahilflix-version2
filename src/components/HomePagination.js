import React from 'react'
import ReactPaginate from 'react-paginate';
import { useSelector, useDispatch } from 'react-redux';
import { changeCurrentPage } from '../action/movie';
const HomePagination = () => {
    const { recentMoviesPageCount } = useSelector(state => state)
    const dispatch = useDispatch()
    const handlePageClick = (data) => {

        console.log('click', data.selected + 1)
        dispatch(changeCurrentPage(data.selected + 1))
        setTimeout(() => {
            window.scrollTo(0, 0)
        }, 800);
    }
    return (
        <div>
            <ReactPaginate
                previousLabel={'<<'}
                nextLabel={'>>'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={recentMoviesPageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={4}
                onPageChange={handlePageClick}
                containerClassName={'pagination'}
                activeClassName={'active'}

            />
        </div>
    )
}

export default HomePagination
