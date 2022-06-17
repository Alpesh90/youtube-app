import axios from 'axios';

const KEY ='AIzaSyA4qwuwBVxgActJIg7mamKI4Ychzpqz1Q0';

export default axios.create(
    {
        baseURL:'https://www.googleapis.com/youtube/v3',
        params:{
            part:'snippet',
            maxResult: 5,
            type:'video',
            key:KEY,
            
        }
    }
);