export const loadRecentMovies = (data) => {
    return {
        type: 'LOAD_RECENT_MOVIES',
        payload: data,
    }
}
export const loadRecentMoviesPageCount = (data) => {
    return {
        type: 'LOAD_RECENT_MOVIES_PAGE_COUNT',
        payload: data,
    }
}
export const changeSearchCurrentpage = (data) => {
    return {
        type: 'CHANGE_SEARCH_CURRENT_PAGE',
        payload: data
    }
}
export const searchMoviePageCount = (data) => {
    return {
        type: 'CHANGE_SEARCH_MOVIES_PAGE_COUNT',
        payload: data,
    }
}
export const searchMovieListAction = (data) => {
    return {
        type: 'SEARCH_MOVIE_LIST',
        payload: data
    }
}
export const clearPreviousSearch = () => {
    return {
        type: 'CLEAR_PREVIOUS_SEARCH'
    }
}
export const changeCurrentPage = (data) => {
    return {
        type: 'CHANGE_CURRENT_PAGE',
        payload: data
    }
}
export const fullMoviePageData = (data) => {
    return {
        type: 'FULL_MOVIE_PAGE_DATA',
        payload: data
    }
}
