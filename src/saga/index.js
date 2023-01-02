import { put, takeEvery } from 'redux-saga/effects';
// import { useSelector, useDispatch } from 'react-redux';
// const { recentMovies, currentPage } = useSelector(state => state)

import axios from 'axios'
function* loadMoviesToState() {
    console.log('running async middleware 1')

    const recentlyUploaded = yield axios.get(`https://sahilflix-backend-api.onrender.com/recentlyUploaded`)
        // const recentlyUploaded = yield axios.get(`https://yts.mx/api/v2/list_movies.json?sort_by=date_added&limit=20&page=${1}`)
        .then(response => response)
    console.log('running async middleware 2')
    console.log(recentlyUploaded)
    yield put({ type: 'LOAD_RECENT_MOVIES', payload: recentlyUploaded.data.movies })

}



export function* loadMovies() {
    console.log('running  middleware')

    yield takeEvery('GET_MOVIES', loadMoviesToState)

}







