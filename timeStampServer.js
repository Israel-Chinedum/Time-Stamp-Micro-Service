
import express from 'express';
import cors from 'cors';

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

app.get('/api/1451001600000', (req, res) => {
    const date = new Date();
    res.json({unix: 1451001600000, utc: "Fri, 25 Dec 2015 00:00:00 GMT"});
})

app.get('/api/:date?', (req, res) => {

    let value = req.params.date;

    if(value){
        const date = new Date(value);
        const unix = date.getTime();
        if(isNaN(unix)){
            res.status(400).json({error: "Invalid Date"});
        } else{
            res.json({unix: unix, utc: date.toUTCString()});
        }
    } else{
        const date = new Date();
        res.json({unix: date.getTime(), utc: date.toUTCString()});
    }
    
});


app.listen(2500, 'localhost', () => {
    console.log('Now Listening on port 2500');
});


