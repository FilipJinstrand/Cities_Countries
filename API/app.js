const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');

app.get('/country', (req, res) => {
    fs.readFile('land.json', (err, data) => {
        if (err) throw err;
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.write(data);
        res.end();
    })
})

app.listen(3000, () => { console.log(`App running on port: ${port}`) })

