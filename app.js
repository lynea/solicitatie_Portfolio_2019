var express = require("express"),
    app =express()
    ; 

const port = 3000;

app.use(express.static(__dirname + "/public"));
app.set('view engine', 'ejs'); 

app.get("/", function(req, res) {
    res.render('index')
});


// project routes

app.get("/projects", function(req, res) {
    res.render('projects')
});

app.get("/elderly", function(req, res) {
    res.render('elderly')
});

app.get("/parking", function(req, res) {
    res.render('parking')
});

app.get("/c4", function(req, res) {
    res.render('c4')
});

app.get("/double-check", function(req, res) {
    res.render('double-check')
});



app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// app.listen(process.env.PORT, process.env.IP);