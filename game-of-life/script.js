// let matrix = [];

// var w = 25;
// var h = 25;
// var side = 25;
// var grassArr = [];
// var grasseaterArr = [];
// var predatorArr = [];
// var jokerArr = [];
// var dogArr = [];
// socket.on("weather", function (data) {
//     weath = data;
// })
// function setup() {
    
//     for (var i = 0; i < w; i++) {
//         matrix[i] = [];
//         for (var j = 0; j < h; j++) {
//             matrix[i][j] = Math.floor(random(6));
//             createCanvas(matrix[0].length * side, matrix.length * side);
//         }
//     }
//     matrix[12][2] = 5;
//     frameRate(5);
//     createCanvas(matrix[0].length * side, matrix.length * side);
//     background('#acacac');


//     for (var y = 0; y < matrix.length; ++y) {
//         for (var x = 0; x < matrix[y].length; ++x) {
//             if (matrix[y][x] == 1) {
//                 var gr = new Grass(x, y, 1);
//                 grassArr.push(gr);
//             }
//             else if (matrix[y][x] == 2) {
//                 var ge = new GrassEater(x, y, 2)
//                 grasseaterArr.push(ge);

//             } else if (matrix[y][x] == 3) {
//                 var pe = new Predator(x, y, 3)
//                 predatorArr.push(pe);

//             }
//             else if (matrix[y][x] == 4) {
//                 var jo = new Joker(x, y, 4)
//                 jokerArr.push(jo);

//             }
//             else if (matrix[y][x] == 5) {
//                 var dog = new Dog(x, y, 5)
//                 dogArr.push(dog);

//             }
//         }
// }
// }


//         function draw() {
//             for (var y = 0; y < matrix.length; y++) {
//                 for (var x = 0; x < matrix[y].length; x++) {

//                     if (matrix[y][x] == 0) {
//                         fill("gray");
//                         rect(x * side, y * side, side, side);
//                     }
//                     else if (matrix[y][x] == 1) {
//                         fill("green");
//                         rect(x * side, y * side, side, side);
//                     }
//                     else if (matrix[y][x] == 2) {
//                         fill("yellow");
//                         rect(x * side, y * side, side, side);
//                     } 
//                     else if (matrix[y][x] == 3) {
//                         fill("red");
//                         rect(x * side, y * side, side, side);
//                     }
//                     else if (matrix[y][x] == 4) {
//                         fill("pink");
//                         rect(x * side, y * side, side, side);
//                     }
//                     else if (matrix[y][x] == 5) {
//                         fill("black");
//                         rect(x * side, y * side, side, side);
//                     }

//                 }
//             }

//         for (var i in grassArr) {
//             grassArr[i].mul();
//         }

//         for (var i in grasseaterArr) {
//             grasseaterArr[i].move();
//             grasseaterArr[i].eat();
//             grasseaterArr[i].mul();
//             grasseaterArr[i].die();
//         }
//         for (var i in predatorArr) {
//             predatorArr[i].move();
//             predatorArr[i].eat();
//             predatorArr[i].mul();
//             predatorArr[i].die();
//         }
//         for (var i in jokerArr) {
//             jokerArr[i].move();
//             jokerArr[i].eat();
//             jokerArr[i].mul();
//             jokerArr[i].die();

//         }
//         for (var i in dogArr) {
//             dogArr[i].move();
//             dogArr[i].eat();
//             dogArr[i].mul();
//             dogArr[i].die();
//         }
//     }


//     function kill() {
//         socket.emit("kill")
//     }
//     function addGrass() {
//         socket.emit("add grass")
//     }
//     function addGrassEater() {
//         socket.emit("add grassEater")
//     }
//     function addPredator() {
//         socket.emit("add pradator")
//     } 
//     function addJoker() {
//         socket.emit("add joker")
//     } 
//     function addDog() {
//         socket.emit("add dog")
//     }

//     for (var y = 0; y < matrix.length; y++) {
//         for (var x = 0; x < matrix[0].length; x++) {
//             var obj = matrix[y][x];
//             if (obj == 1){
//                 if(weath == "summer") {
//                 fill("green");
//             }else if (weath == "autumn") {
//                 fill("#333300");
//             }else if (weath == "winter") {
//                 fill("white");
//             }else if (weath == "spring") {
//                 fill("#4dffa6");
//             }
//         }else if (obj == 2) {
//                 fill("yellow");
//             }else if (obj == 0){
//                 fill("grey")
//             }
//             rect(x * side, y * side, side, side);
//         }
//     }


//         socket.on('send matrix', nkarel)
 