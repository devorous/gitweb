const express = require('express');
const app = express();
const port = 8000;

const path = '/home/d/Documents/vscode/gitweb/main/'

app.use(express.static("public"));

app.listen(port, () =>{
    console.log(`Example app listening on port ${port}!`)
});