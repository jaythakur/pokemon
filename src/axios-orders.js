import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-de6bb.firebaseio.com/'
});

export default instance;