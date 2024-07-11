import { React, useEffect, useState } from 'react';
import axios from 'axios';

function Main() {
    const [data, setData] = useState('');

    useEffect(() => {
        axios.get('http://localhost:3000/')
            .then((response) => setData(response.data))
            .catch((error) => console.log(error));
    }, []);

    return (
        <div style={{ display: 'flex'}}>
           {data}
        </div>
    );
}

export default Main;

/*
cd frontend
npx create-react-app .
rfce
npm i axios
npm start
*/