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



app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// app.listen(process.env.PORT, process.env.IP);