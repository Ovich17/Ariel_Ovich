// import and init
const express = require('express');
const app = express();
const path = require('path');
const port = 2020;
app.use(express.static(path.join(__dirname, "static")))

// routing 
app.get('/', (req,res)=> {
    console.log('THIS IS THE BODY:     ', req.query);
    res.sendFile(path.join(__dirname, "views/index.html"));
});

app.get('/formHandler', (req, res)=>{
    var x = req.query;
    //res.send(x);
    res.send("Thank You!");
});

// set up listen
app.listen(port, ()=>{
    console.log("server is running on port", port);
});