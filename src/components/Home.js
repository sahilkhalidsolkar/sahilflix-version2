import React, { useEffect } from 'react'
import MovieCard from './MovieCard'
import { useSelector, useDispatch } from 'react-redux';
import { loadRecentMovies, loadRecentMoviesPageCount } from '../action/movie';
import axios from 'axios'
import HomePagination from './HomePagination';
const Home = () => {
    const { recentMovies, currentPage } = useSelector(state => state)
    const dispatch = useDispatch()
    useEffect(() => {

        getRecentlyUploaded()

    }, [currentPage])



    const getRecentlyUploaded = async () => {
        // const recentlyUploaded = await axios.get(`https://yts.mx/api/v2/list_movies.json?sort_by=date_added&limit=20&page=${currentPage}`)

        // load page count into state
        // dispatch(loadRecentMoviesPageCount(Math.ceil(recentlyUploaded.data.data.movie_count / 20)))
        // load movies into state
        // dispatch(loadRecentMovies(recentlyUploaded.data.data.movies))


        // for redux saga
        dispatch({ type: 'GET_MOVIES' })

    }


    return (
        <div>
            <MovieCard recentMovies={recentMovies} />
            <HomePagination />
        </div >
    )
}

export default Home
