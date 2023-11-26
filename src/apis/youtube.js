import axios from 'axios';

// const KEY = '';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    param: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: 'AIzaSyBJkqVEn2pbgk168yeca06dFjdaC_n7TAA'
    }
});