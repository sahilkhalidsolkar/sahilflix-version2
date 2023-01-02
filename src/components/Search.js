import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { DebounceInput } from 'react-debounce-input';
import { searchMovieListAction, clearPreviousSearch, searchMoviePageCount } from '../action/movie';
import { useDispatch, useSelector } from 'react-redux';
import MovieCard from './MovieCard';
import SearchPagination from './SearchPagination';

const Search = () => {
    const { searchMovieList, searchCurrentPage } = useSelector(state => state)
    const [search, setSearchstate] = useState('');
    // const [search, setSearchstate] = useState(undefined);
    const dispatch = useDispatch()
    useEffect(() => {
        onTypingSearch()
        console.log('running')
    }, [search, searchCurrentPage])

    let cancelToken
    const onTypingSearch = async () => {
        if (cancelToken !== undefined) {
            cancelToken.cancel('cancelling previous request')
        }
        cancelToken = axios.CancelToken.source()
        // const searched = await axios.get(`https://yts.mx/api/v2/list_movies.json?query_term=${search}&sort_by=like_count&page=${searchCurrentPage}`,
        const searched = await axios.get(`https://sahilflix-backend-api.onrender.com/search`,
            {
                params: { searchMovie: search, page: searchCurrentPage }
            },
            {
                cancelToken: cancelToken.token
            }
        )
        console.log(searched.data)
        if (searched.data.movies?.length > 0) {
            dispatch(searchMoviePageCount(Math.ceil(searched.data.movie_count / 20)))
            console.log(searched.data.movies)
            dispatch(searchMovieListAction(searched.data.movies))
        }
        // if (searched.data?.data?.movies?.length > 0) {
        //     dispatch(searchMoviePageCount(Math.ceil(searched.data.data.movie_count / 20)))
        //     console.log(searched.data.data.movies)
        //     dispatch(searchMovieListAction(searched.data.data.movies))
        // }
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="input-field col s12  ">
                        {/* <input id="Search_Movies" type="text" autoComplete='false'
                            style={{
                                fontSize: "1.5rem",
                                color: '#80ff8c'
                            }}
                            value={search}
                            onChange={(e) => {
                                dispatch(clearPreviousSearch())
                                setSearchstate(e.target.value)
                            }}

                        />
                        <label htmlFor="Search_Movies">Search Movies</label> */}
                        <DebounceInput
                            // minLength={1}
                            debounceTimeout={400}
                            onChange={event => {
                                dispatch(clearPreviousSearch())
                                setSearchstate(event.target.value)
                            }} />
                    </div>
                </div>
                {search && <MovieCard recentMovies={searchMovieList} />}
            </div>
            {search && <SearchPagination />}

        </div>
    )
}

export default Search
