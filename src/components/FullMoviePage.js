import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import YouTube from 'react-youtube';
import M from 'materialize-css'
const FullMoviePage = () => {
    const { fullMoviePageData: movie } = useSelector(state => state)
    const opts = {
        height: '390',
        width: '100%',

    }
    useEffect(() => {
        document.documentElement.style.setProperty('--background', 'black');
        M.Tabs.init(document.querySelector('.tabs'), { swipeable: true });
        window.scrollTo(0, 0)
        return () => {
            document.documentElement.style.setProperty('--background', '#333633');
        }
    }, [])
    return (
        <div className='container'>
            {console.log(movie)}
            <div className="row">
                <div className="s12">
                    <p className='movie_title'>{movie.title_english}</p>
                </div>
            </div>
            <div className="row">
                <div className="col s12  movie_image">
                    <img src={movie.large_cover_image} alt={movie.title} className="responsive-img z-depth-5 " />
                </div>
            </div>
            <div className="row">
                {movie.description_full ? (<p className="center-align movie_summary">{movie.description_full}</p>) : <p className="center-align movie_summary">No Summary found for this movie... ☹ ☹ ☹ </p>}
            </div>
            <div className="row">
                <div className="col s12  movie_information">

                    <p>Title : {movie.title}</p>
                    <p>Year : {movie.year} </p>
                    <p> IMDB Rating : <i className="fas fa-star " style={{
                        color: '#ffec80',
                        padding: '0px 6px'
                    }}></i>{`${movie.rating || 0}/10`}</p>
                    <p>Language : {movie.language} </p>
                    <p>{movie.runtime ? `Duration : ${movie.runtime} minutes` : ''}</p>
                    <p>Genres : {movie.genres?.map(genre => ` ${genre} `)} </p>
                </div>
                <div className="col s12">
                    {movie.yt_trailer_code && <YouTube videoId={movie.yt_trailer_code} opts={opts} />}
                </div>
                <Link to="/liveMovie" className="btn download_button">WATCH LIVE<i className="fas fa-film right"></i></Link>
            </div>
            <div class="row">
                <div class="col s12 m6">
                    <div class="card  darken-1" style={{ backgroundColor: 'rgb(4, 248, 37)', borderRadius: '10px' }}>
                        <div class="card-content black-text">
                            <span class="card-title" style={{ fontSize: '1.6rem', fontWeight: '600', }}><i class="fas fa-info-circle"></i> Note</span>
                            <p style={{ fontSize: '1.2rem' }}>You can use torrent downloading client like flud torrent, utorrent, etc.


                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col s12 ">

                    <ul id="tabs-swipe-demo" className="tabs download_tabs">
                        {movie?.torrents?.map(torrent => {
                            return (
                                <li key={torrent.hash} className="tab col s3"><a href={`#${torrent.date_uploaded_unix}`}
                                    style={{
                                        color: 'rgb(73, 245, 73)',
                                    }}

                                >{torrent.quality}</a></li>

                            )
                        })}

                    </ul>
                    {movie?.torrents?.map(torrent => {
                        return (
                            <div key={torrent.hash} id={torrent.date_uploaded_unix} className="col s12 download_details " >
                                <p className='download_details'>QUALITY : {torrent.quality}</p>
                                <p>SIZE : {torrent.size}</p>
                                <p>SEEDS : {torrent.seeds}</p>
                                <p>PEERS : {torrent.peers}</p>
                                <p>UPLOADED ON : {torrent.date_uploaded}</p>
                                <a href={torrent.url} className="btn download_button">DOWNLOAD<i className="fas fa-download right"></i></a>
                                <div className="divider" style={{ backgroundColor: 'green', marginTop: '1rem' }}></div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default FullMoviePage
