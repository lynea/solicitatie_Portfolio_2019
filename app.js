var express = require("express"),
    app =express()
    ; 

const port = 3000

app.use(express.static(__dirname + "/public"));
app.set('view engine', 'ejs'); 

app.get("/", function(req, res) {
    res.render('index')
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))