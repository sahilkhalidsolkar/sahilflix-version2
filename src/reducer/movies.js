const initialState = {
    recentMoviesPageCount: 0,
    loading: false,
    recentMovies: [],
    searchMovieList: [],
    searchCurrentPage: 1,
    searchMoviesPageCount: 0,
    currentPage: 1,
    fullMoviePageData: JSON.parse(localStorage.getItem('fullpagemovie'))
}
const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_MOVIES":
            return { ...state, loading: true }
        case "LOAD_RECENT_MOVIES":
            return { ...state, recentMovies: [...action.payload], loading: false }
        case "LOAD_RECENT_MOVIES_PAGE_COUNT":
            return { ...state, recentMoviesPageCount: action.payload }
        case "CHANGE_CURRENT_PAGE":
            return { ...state, currentPage: action.payload }
        case "CHANGE_SEARCH_CURRENT_PAGE":
            return { ...state, searchCurrentPage: action.payload }
        case "CHANGE_SEARCH_MOVIES_PAGE_COUNT":
            return { ...state, searchMoviesPageCount: action.payload }
        case "FULL_MOVIE_PAGE_DATA":
            return { ...state, fullMoviePageData: action.payload }

        case "SEARCH_MOVIE_LIST":
            return { ...state, searchMovieList: [...action.payload] }
        case "CLEAR_PREVIOUS_SEARCH":
            return { ...state, searchMovieList: [], searchCurrentPage: 1 }
        default:
            return state
    }
}
export default moviesReducer