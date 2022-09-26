import axios from "axios";
import { LOAD_MOVIES_ERROR, LOAD_MOVIES_LOADING ,LOAD_MOVIES_SUCCESS} from "./MovieListAction";

const movieListApiUrl =    "https://api.themoviedb.org/3/movie/tt6105098?api_key=fb64a1d63cd3a4452639f83d589d4d5b&language=en-US";

export const loadMovies = () => (dispatch) => {
    dispatch({
        type: LOAD_MOVIES_LOADING,
        payload: {
            show: true,
        },
    });
    axios
        .get(movieListApiUrl)
        .then(
            (data) => dispatch({ type: LOAD_MOVIES_SUCCESS, data }),
            (error) =>
                dispatch({
                    type: LOAD_MOVIES_ERROR,
                    error: error.message || "Unexpected Error!!",
                })
        )

        .catch((error) => {
            console.error(error);
        });
};