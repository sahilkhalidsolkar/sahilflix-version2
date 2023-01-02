import React, { Fragment } from 'react'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const LiveMovie = () => {
    const { fullMoviePageData: movie } = useSelector(state => state)
    // const [movieHash, setMovieHash] = useState(localStorage.getItem('movieHash'));
    useEffect(() => {
        // setMovieHash(movieHash || movie.torrents[0].hash)

    }, []);
    const checkfor720p = (torrents) => {
        const torrent = torrents.find(torrent => torrent.quality == '720p')
        return torrent.hash

    }
    return (
        <div className="row conatiner">

            <div className='col s12 ' style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column'

            }}>

                <video controls src={`magnet:?xt=urn:btih:${checkfor720p(movie.torrents)}`}></video>


                <div class="row">
                    <div class="col s12 ">
                        <div class="card  darken-1" style={{ backgroundColor: 'rgb(4, 248, 37)', borderRadius: '10px' }}>
                            <div class="card-content black-text">
                                <span class="card-title" style={{ fontSize: '1.6rem', fontWeight: '600', }}><i class="fas fa-info-circle"></i> Note</span>
                                <p style={{ fontSize: '1.2rem' }}>please refresh and wait for 3 seconds if the video is not available


                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default LiveMovie
