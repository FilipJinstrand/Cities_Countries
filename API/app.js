const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');

// Allow cross origin
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5500"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


// Get all countries
app.get('/country', (req, res) => {
    fs.readFile('land.json', (err, data) => {
        if (err) throw err;
        var countries = JSON.parse(data);
        res.json(countries);
        res.end();
    })
})

// Get City depending on the country id
app.get('/country/:id', (req, res) => {
    var id = parseInt(req.params.id);
    fs.readFile('stad.json', (err, data) => {
        if (err) throw err;
        var cities = JSON.parse(data);
        var country = cities.filter(a => a.countryid === id);
        res.json(country);
        res.end();
    })
})

app.listen(3000, () => { console.log(`App running on port: ${port}`) })

