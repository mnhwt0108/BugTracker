import axios from 'axios';

export const getRandomList = async(type, genre) => {
    const request = await axios.get(`http://localhost:5555/list/${type ? '?type=' + type : ''}${genre ? '&genre=' + genre : ''}`, {
        headers: {
            token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjgzN2ZhYTE0NmFiMGRkYjYzYjQ4YWIiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2NTI5MjU1NzMsImV4cCI6MTY1MzM1NzU3M30.4E1Ba5JcHvSXuapq2LnI6w17zACDTIEYoe67NmdKo7g'
        }
    });
    return request;
}

export const getMovie = async(item) => {
    const request = await axios.get(`http://localhost:5555/movie/find/${item}`, {
        headers: {
            token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjgzN2ZhYTE0NmFiMGRkYjYzYjQ4YWIiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2NTI5MjU1NzMsImV4cCI6MTY1MzM1NzU3M30.4E1Ba5JcHvSXuapq2LnI6w17zACDTIEYoe67NmdKo7g'
        }
    });
    return request;
}

export const getRandomContent = async(type) => {
    const request = await axios.get(`http://localhost:5555/movie/random?type=${type}`, {
        headers: {
            token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjgzN2ZhYTE0NmFiMGRkYjYzYjQ4YWIiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2NTI5MjU1NzMsImV4cCI6MTY1MzM1NzU3M30.4E1Ba5JcHvSXuapq2LnI6w17zACDTIEYoe67NmdKo7g'
        }
    });
    return request;
}