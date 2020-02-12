var socket = io();
side = 30;

weath = "winter";
weath == "spring";
weath == "summer";
weath == "autumn"
function setup(){
   createCanvas(550, 550);
    background('#acacac');
}
function nkarel(matrix){

        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {

                if (matrix[y][x] == 0) {
                    fill("gray");
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 1) {
                    fill("green");
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 2) {
                    fill("yellow");
                    rect(x * side, y * side, side, side);
                } 
                else if (matrix[y][x] == 3) {
                    fill("red");
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 4) {
                    fill("pink");
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 5) {
                    fill("black");
                    rect(x * side, y * side, side, side);
                }
            }
        }
    }

    socket.on('send matrix', nkarel)
    function kill() {
        socket.emit("kill")
    }
    function addGrass() {
        socket.emit("add grass")
    }
    function addGrassEater() {
        socket.emit("add grassEater")
    }
    function addPredator() {
        socket.emit("add pradator")
    } 
    function addJoker() {
        socket.emit("add joker")
    } 
    function addDog() {
        socket.emit("add dog")
    }
    let matrix = [];

    var w = 25;
    var h = 25;
    var side = 25;
    var grassArr = [];
    var grasseaterArr = [];
    var predatorArr = [];
    var jokerArr = [];
    var dogArr = [];
    socket.on("weather", function (data) {
        weath = data;
    })
    function setup() {
        
        for (var i = 0; i < w; i++) {
            matrix[i] = [];
            for (var j = 0; j < h; j++) {
                matrix[i][j] = Math.floor(random(6));
                createCanvas(matrix[0].length * side, matrix.length * side);
            }
        }
        
        // frameRate(5);
        // createCanvas(matrix[0].length * side, matrix.length * side);
        // background('#acacac');
    
    
        
    }
    
    
            function draw() {
                for (var y = 0; y < matrix.length; y++) {
                    for (var x = 0; x < matrix[y].length; x++) {
    
                        if (matrix[y][x] == 0) {
                            fill("gray");
                            rect(x * side, y * side, side, side);
                        }
                        else if (matrix[y][x] == 1) {
                            fill("green");
                            rect(x * side, y * side, side, side);
                        }
                        else if (matrix[y][x] == 2) {
                            fill("yellow");
                            rect(x * side, y * side, side, side);
                        } 
                        else if (matrix[y][x] == 3) {
                            fill("red");
                            }
                        else if (matrix[y][x] == 4) {
                            fill("pink");
                            rect(x * side, y * side, side, side);
                        }
                        else if (matrix[y][x] == 5) {
                            fill("black");
                            rect(x * side, y * side, side, side);
                        }
    
                    }
                }
    
            
    
    
        function kill() {
            socket.emit("kill")
        }
        function addGrass() {
            socket.emit("add grass")
        }
        function addGrassEater() {
            socket.emit("add grassEater")
        }
        function addPredator() {
            socket.emit("add pradator")
        } 
        function addJoker() {
            socket.emit("add joker")
        } 
        function addDog() {
            socket.emit("add dog")
        }
    
        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[0].length; x++) {
                var obj = matrix[y][x];
                if (obj == 1){
                     if(weath == "summer") {
                    fill("green");
                    }
                }
                else if (weath == "autumn") {
                    fill("#333300");
                }
                else if (weath == "winter") {
                    fill("white");
                }
                else if (weath == "spring") {
                    fill("#4dffa6");
                }
            }
             if (obj == 2) {
                    fill("yellow");
            }
                }
                  if (obj == 0){
                    fill("grey")
                }
            }
        
               
            
        
    
    
            socket.on('send matrix', nkarel)
    
            