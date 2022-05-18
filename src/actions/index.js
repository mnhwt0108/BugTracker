import axios from 'axios';

export const getRandomList = async(type, genre) => {
    const request = await axios.get(`http://localhost:5555/list/${type ? '?type=' + type : ''}${genre ? '&genre=' + genre : ''}`, {
        headers: {
            token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mjg0NGY0NDFkZjQ1ZGUzYTQyODVhMzAiLCJpc0FkbWluIjpmYWxzZSwiaWF0IjoxNjUyODY0NjQwLCJleHAiOjE2NTMyOTY2NDB9.VhpHQaS9D31mjZ1T7oBkcqy5pNfkV76z52nBmF2DrNg'
        }
    });
    return request;
}

export const getMovie = async(item) => {
    const request = await axios.get(`http://localhost:5555/movie/find/${item}`, {
        headers: {
            token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mjg0NGY0NDFkZjQ1ZGUzYTQyODVhMzAiLCJpc0FkbWluIjpmYWxzZSwiaWF0IjoxNjUyODY0NjQwLCJleHAiOjE2NTMyOTY2NDB9.VhpHQaS9D31mjZ1T7oBkcqy5pNfkV76z52nBmF2DrNg'
        }
    });
    return request;
}

export const getRandomContent = async(type) => {
    const request = await axios.get(`http://localhost:5555/movie/random?type=${type}`, {
        headers: {
            token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mjg0NGY0NDFkZjQ1ZGUzYTQyODVhMzAiLCJpc0FkbWluIjpmYWxzZSwiaWF0IjoxNjUyODY0NjQwLCJleHAiOjE2NTMyOTY2NDB9.VhpHQaS9D31mjZ1T7oBkcqy5pNfkV76z52nBmF2DrNg'
        }
    });
    return request;
}