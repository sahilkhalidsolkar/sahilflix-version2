
import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fullMoviePageData } from '../action/movie'

const MovieCard = ({ recentMovies }) => {

    const dispatch = useDispatch()
    return (
        <div>
            <div className="row" >
                {recentMovies.map(movie => (

                    <div className="col s6 m3 l3 " key={movie.id} >
                        <Link to="/fullpage">
                            <div className="card " style={{ background: '#0a0a0a' }}
                                onClick={() => {
                                    dispatch(fullMoviePageData(movie))
                                    localStorage.setItem("fullpagemovie", JSON.stringify(movie))
                                }}
                            >
                                <div className="card-image">
                                    <img src={movie.medium_cover_image} className="responsive-img" />
                                </div>
                                <div className="card-content">
                                    <p className="truncate  " style={{ color: 'white', fontSize: "1.5rem" }}>{movie.title_english}</p>
                                    <div style={{ color: 'white', fontSize: '1.2rem' }}>
                                        <i className="fas fa-star " style={{
                                            color: '#ffec80',
                                            paddingRight: '10px'
                                        }}></i>{`${movie.rating}/10`}</div>
                                </div>
                            </div>
                        </Link>
                    </div>

                ))}
            </div>
        </div >
    )
}

export default MovieCard
