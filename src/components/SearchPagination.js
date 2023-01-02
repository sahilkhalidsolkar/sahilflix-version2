import React from 'react'
import ReactPaginate from 'react-paginate';
import { useSelector, useDispatch } from 'react-redux';
import { changeSearchCurrentpage } from '../action/movie';
const SearchPagination = () => {
    const { searchMoviesPageCount } = useSelector(state => state)
    const dispatch = useDispatch()
    const handlePageClick = (data) => {

        console.log('click', data.selected + 1)
        dispatch(changeSearchCurrentpage(data.selected + 1))
        setTimeout(() => {
            window.scrollTo(0, 10)
        }, 500);
    }
    return (
        <div>
            <ReactPaginate
                previousLabel={'<<'}
                nextLabel={'>>'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={searchMoviesPageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={'pagination'}
                activeClassName={'active'}

            />
        </div>
    )
}

export default SearchPagination
