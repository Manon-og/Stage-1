const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Java');
    });
 
app.listen(3000, () => {
    });

/*
cd backend
npm init -y
npm i express nodemon cors
npm start     
*/
