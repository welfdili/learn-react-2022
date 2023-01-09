import axios from 'axios';

export const articleApi = axios.create({
    baseURL: `${process.env.REACT_APP_URL_API}/articles`
});
