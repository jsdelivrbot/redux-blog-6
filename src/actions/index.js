import axios from 'axios';

export const FETCH_POSTS = "FETCH_POSTS";
export const FETCH_POST = "FETCH_POST";
export const CREATE_POST = "CREATE_POST";
export const DELETE_POST = "DELETE_POST";

const R00T_URL = "http://reduxblog.herokuapp.com/api";
const API_KEY = '?key=koda';

export function fetchPosts() {
    const request = axios.get(`${R00T_URL}/posts${API_KEY}`);

    return (dispatch) => {
        request.then(({ data }) => {   
            dispatch({ type: FETCH_POSTS, payload: data });
        });
    };
}

export function createPost(values, callback) {
    const request = axios.post(`${R00T_URL}/posts${API_KEY}`, values)

    return(dispatch) => {
        request.then(({ data }) => {                 
            dispatch({ type: CREATE_POST, payload: data });
            callback();
        });
    };
}

export function fetchPost(id) {
    const request = axios.get(`${R00T_URL}/posts/${id}${API_KEY}`);

    return (dispatch) => {
        request.then(({ data }) => {
            dispatch({ type: FETCH_POST, payload: data });
        });
    };
}

export function deletePost(id, callback) {
    const request = axios.delete(`${R00T_URL}/posts/${id}${API_KEY}`)

    return(dispatch) => {
        request.then(({ data }) => {             
            dispatch({ type: DELETE_POST, payload: id });
            callback();
        });
    };
}