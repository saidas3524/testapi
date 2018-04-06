var express    = require('express');
var app        = express();
var port     = process.env.PORT ||3300; // set our port




app.get("/api/user", function (req, res) {

    var user = {
        name:"Regux-saga user",
        Id:1234,
    }


    res.status(200).send(JSON.stringify(user))
})









var server = app.listen(3300, function () {
    console.log("app is running on ", server.address().port);
});