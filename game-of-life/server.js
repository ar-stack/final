var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require('fs')
app.use(express.static("."));


app.get('/',function (req, res){
    res.redirect('index.html')
})

server.listen(3000);

 grassArr = [];
 grasseaterArr = [];
 predatorArr = [];
 jokerArr = [];
 dogArr = [];

var w = 25;
var h = 25;
 matrix = [];
for (var i = 0; i < w; i++) {
    matrix[i] = [];
    for (var j = 0; j < h; j++) {
        matrix[i][j] = Math.floor( Math.random() * 5);

    }
}
io.sockets.emit('send matrix', matrix)

weath = "winter";
// weath == "spring";
// weath == "summer";
// weath == "autumn"
Grass = require("./Grass");
GrassEater = require("./GrassEater");
Predator = require("./Predator");
Joker = require("./Joker");
Dog = require("./Dog");

function createObject(){
for (var y = 0; y < matrix.length; ++y) {
    for (var x = 0; x < matrix[y].length; ++x) {
        if (matrix[y][x] == 1) {
            var gr = new Grass(x, y, 1);
            grassArr.push(gr);
        }
        else if (matrix[y][x] == 2) {
            var ge = new GrassEater(x, y, 2)
            grasseaterArr.push(ge);

        } else if (matrix[y][x] == 3) {
            var pe = new Predator(x, y, 3)
            predatorArr.push(pe);

        }
        else if (matrix[y][x] == 4) {
            var jo = new Joker(x, y, 4)
            jokerArr.push(jo);

        }
        else if (matrix[y][x] == 5) {
            matrix[y][x] = 5
            var dog = new Dog(x, y, 5)
            dogArr.push(dog);

        }
    }
}
io.sockets.emit("send matrix", matrix)
}
function game(){
for (var i in grassArr) {
    grassArr[i].mul();
}

for (var i in grasseaterArr) {
    grasseaterArr[i].move();
    grasseaterArr[i].eat();
    grasseaterArr[i].mul();
    grasseaterArr[i].die();
}
for (var i in predatorArr) {
    predatorArr[i].move();
    predatorArr[i].eat();
    predatorArr[i].mul();
    predatorArr[i].die();
}
for (var i in jokerArr) {
    jokerArr[i].move();
    jokerArr[i].eat();
    jokerArr[i].mul();
    jokerArr[i].die();

}
for (var i in dogArr) {
    dogArr[i].move();
    dogArr[i].eat();
    dogArr[i].mul();
    dogArr[i].die();
}
io.sockets.emit("send matrix", matrix)
}

setInterval(game, 1000)
io.on('connect', function (){
    createObject(matrix)
})

// Math.floor(random() * 5);
function kill() {
    grassArr = [];
    grassEaterArr = []
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            matrix[y][x] = 0;
        }
    }
    io.sockets.emit("send matrix", matrix);
}


function addGrass() {
    for (var i = 0; i < 7; i++) {
    var x = Math.floor(Math.random() * matrix[0].length)
    var y = Math.floor(Math.random() * matrix.length)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 1
            var gr = new Grass(x, y, 1)
            grassArr.push(gr)
        }
    }
    io.sockets.emit("send matrix", matrix);
}
function addGrassEater() {
    for (var i = 0; i < 7; i++) {   
    var x = Math.floor(Math.random() * matrix[0].length)
    var y = Math.floor(Math.random() * matrix.length)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 2
            grassEaterArr.push(new GrassEater(x, y, 2))
        }
    }
    io.sockets.emit("send matrix", matrix);
}
function addPredator() {
    for (var i = 0; i < 7; i++) {   
    var x = Math.floor(Math.random() * matrix[0].length)
    var y = Math.floor(Math.random() * matrix.length)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 3
           predatorArr.push(new Predator(x, y, 3))
        }
    }
    io.sockets.emit("send matrix", matrix);
}

function addJoker() {
    for (var i = 0; i < 7; i++) {   
    var x = Math.floor(Math.random() * matrix[0].length)
    var y = Math.floor(Math.random() * matrix.length)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 4
            jokerArr.push(new Joker(x, y, 4))
        }
    }
    io.sockets.emit("send matrix", matrix);
}

function addDog() {
    for (var i = 0; i < 7; i++) {   
    var x = Math.floor(Math.random() * matrix[0].length)
    var y = Math.floor(Math.random() * matrix.length)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 5;
            dogArr.push(new dog(x, y, 5))
        }
    }
    io.sockets.emit("send matrix", matrix);
}






function weather() {
    if (weath == "winter") {
        weath = "spring"
    }
    else if (weath == "spring") {
        weath = "summer"
    }
    else if (weath == "summer") {
        weath = "autumn"
    }
    else if (weath == "autumn") {
        weath = "winter"
    }
    io.sockets.emit('weather', weath)
}
setInterval(weather, 5000);



io.on('connection', function (socket) {
    createObject();
    socket.on("kill", kill);
    socket.on("add grass", addGrass);
    socket.on("add grassEater", addGrassEater);
    socket.on("add predator", addPredator);
    socket.on("add joker", addJoker);
    socket.on("add dog", addDog);
});


var statistics = {};

setInterval(function() {
    statistics.grass = Grass.length;
    statistics.grassEater = GrassEater.length;
    statistics.predator = Predator.length;
    statistics.joker = Joker.length;
    statistics.dog = Dog.length;
    fs.writeFile("statistics.json", JSON.stringify(statistics), function(){
        console.log("send")
    })
},1000)