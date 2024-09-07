
import express from 'express';
import { utcString } from './utcString.js';
import cors from 'cors';
import fs from 'fs'

const app = express();

// VIEW ENGINE
app.set('view engine', 'ejs');
app.set('views', 'Ejs_Files');

// STATIC FOLDER
app.use(express.static('public'));

// USE CORS
app.use(cors());

// PARSING USER INPUT
app.use(express.text());

// GET ROUTE HANDLER
app.get('', (req, res) => {
    res.render('timeStamp');
});

// POST ROUTE HANDLER
app.post('/api/:date?', (req, res) => {

    if(req.body == ''){
        const date = new Date();
        const unix = date.getTime()/1000;
        res.json({unix: unix, utc: utcString(date, 'time')});
        return;
    }

    const date = new Date(req.body);

    //CONVERT TO UNIX
    const unix = date.getTime()/1000;

    if(isNaN(unix)){
        res.status(400).json({error: "Invalid Date"});
    } else{
        res.json({unix: unix, utc: utcString(date)});
    }
    
});


app.listen(2500, 'localhost', () => {
    console.log('Now Listening on port 2500');
});


