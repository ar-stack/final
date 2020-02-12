// let LivingCreature = require('./LivingCreature')
// module.exports =class Dog extends LivingCreature{
//     constructor(x, y, index) {
//     super(x, y, index);
//         this.index = index;
//         this.energy = 8;
//         this.directions = [];
//     }
//     getNewCoordinatesDog() {
//         this.directions = [
//             [this.x, this.y - 2],
//             [this.x - 1, this.y - 1],
//             [this.x, this.y - 1],
//             [this.x + 1, this.y - 1],
//             [this.x - 2, this.y],
//             [this.x - 1, this.y],
//             [this.x + 1, this.y],
//             [this.x + 2, this.y],
//             [this.x - 1, this.y + 1],
//             [this.x, this.y + 1],
//             [this.x + 1, this.y + 1],
//             [this.x, this.y + 2]
//         ];
//     }
//     chooseCell(character, character1) {
//         this.getNewCoordinatesDog();
//         return super.chooseCell(character);
    
//     }
//     chooseCell2(character, character1) {
//         this.getNewCoordinatesDog();
//         let found = [];
//         for (let i in this.directions) {
//             let x = this.directions[i][0];
//             let y = this.directions[i][1];
//             if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
//                 if (matrix[y][x] == character || matrix[y][x] == character1) {
//                     found.push(this.directions[i]);
//                 }
//             }
//         }
//         return found;
//     }
   
// 	move() {
// 		var emptyCells = super.chooseCell(0);
// 		var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
        
// 		if (newCell) {
// 			var newX = newCell[0];
// 			var newY = newCell[1];

// 			matrix[newY][newX] = 5
// 			matrix[this.y][this.x] = 0;

// 			this.x = newX;
//             this.y = newY
//             this.energy--;
// 		}

		
// 		if (this.energy <= 0) {
// 			this.die();
// 		}

// 	}
//     eat() {
//         let emptyCells = super.chooseCell(1);
//         let joker = jokerArr[Math.floor[Math.random() * emptyCells.length]];
//         if (joker) {
//             var newX = joker[0];
//             var newY = joker[1];


//             if (matrix[newY][newX] == 3) {
//                 for (var i in jokerArr) {
//                     if (newX == jokerArr[i].x && newY == jokerArr[i].y) {
//                         jokerArr.splice(i, 1);
//                         break;
//                     }
//                 }
//             } else if (matrix[newY][newX] == 4) {
//                 for (var i in jokerArr) {
//                     if (newX == jokerArr[i].x && newY == jokerArr[i].y) {
//                         jokerArr.splice(i, 1);
//                         break;
//                     }
//                 }
//             }


//             matrix[newY][newX] = matrix[this.y][this.x]
//             matrix[this.y][this.x] = 0;
//             this.x = newX;
//             this.y = newY;
//             this.energy += 2;
//         }
//     }

//     mul() {
//         this.energy++;
//         let emptyCells = super.chooseCell(0);
//         var newCell = emptyCells[Math.floor[Math.random()* emptyCells.length]];


//         if (this.energy >= 15 && newCell) {
//             var newDog = new Dog(newCell[0], newCell[1], matrix[this.y][this.x]);
//             var newDog1 = new Dog(newCell[0], newCell[1], matrix[this.y][this.x]);
//             var newDog2 = new Dog(newCell[0], newCell[1], matrix[this.y][this.x]);
//             dogArr.push(newDog, newDog1, newDog2);
//             matrix[newCell[1]][newCell[0]] = matrix[this.y][this.x]
//         }
//     }

//     die() {
        
//         if (this.energy <= 0) {
//             matrix[this.y][this.x] = 0;
//             for (var i in dogArr) {
//                 if (this.x === dogArr[i].x && this.y === dogArr[i].y) {
//                     dogArr.splice(i, 1);
//                     break;
//                 }
//             }
//         }
//     }
// }

let LivingCreature = require('./LivingCreature')


class Dog extends LivingCreature{
    constructor(x,y,index) {

        super(x,y,index)

        this.multiply = 0;
        this.energy = 40;
        this.directions = [];
    }
    mymethod(){
        if(Math.floor(Math.random()*100) <= 5){
           let direct = [];
            for(let i = -2; i <= 2; i ++)
                for(let j = -2; j <= 2; j ++){
                    let x = this.x + j;
                    let y = this.y + i;
                    if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length){
                        for(let i in grasseaterArr)
                            if(x === grasseaterArr[i].x && y === grasseaterArr[i].y){
                                grasseaterArr.splice(i,1);
                                break;
                            }
                        for(let i in predatorArr)
                            if(x === predatorArr[i].x && y === predatorArr[i].y){
                                predatorArr.splice(i,1);
                                break;
                            }
                        for(let i in jokerArr)
                            if(x === jokerArr[i].x && y === jokerArr[i].y){
                                jokerArr.splice(i,1);
                                break;
                            }
                        for(let i in dogArr)
                            if(x === dogArr[i].x && y === dogArr[i].y){
                                dogArr.splice(i,1);
                                break;
                            }
                        matrix[y][x] = 2;
                        grasseaterArr.push( new GrassEater(x,y,matrix[y][x]))
                    }
                }
        } 
    }
    eat(){

        let newCell = random(this.chooseCell(4));
        
        if (newCell) {
            
            matrix[newCell[1]] [newCell[0]] = this.index;
            matrix[this.y][this.x] = 0;

            this.x = newCell[0];
            this.y = newCell[1];

            for(let i in jokerArr)
                if(this.x === jokerArr[i].x && this.y === jokerArr[i].y){
                    jokerArr.splice(i,1);
                    break;
                }

            this.energy +=5;
            this.multiply++;

            return;
        }
        this.move();
    }
    move(){
        var newCell = random([random(this.chooseCell(1)),random(this.chooseCell(0))]);
        if (newCell) {
            matrix[newCell[1]] [newCell[0]] = this.index;
            matrix[this.y][this.x] = 0;

            this.x = newCell[0];
            this.y = newCell[1];

            for (var i = 0; i < grassArr.length; i++)
                if(this.x == grassArr[i].x && this.y == grassArr[i].y)            
                    grassArr.splice(i,1);

            this.energy -- ;

        }
    }
    die(){
        if( this.energy <= 0){
            matrix[this.y][this.x] = 1;
            grassArr.push(new Grass(this.x,this.y,1))
            
            for(let i in jokerArr)
                if(this.x == TestArr[i].x && this.y == TestArr[i].y){
                    dogArr.splice(i,1);
                    break;
                }

            this.mymethod();
            return;
        }
        this.mul();
    }
    mul(f = false) {
        var newCell = random(this.chooseCell(0));
        if ((this.multiply >= 12 && newCell)|| f ) {

            jokerArr.push(new Joker(newCell[0], newCell[1], this.index));
            matrix[newCell[1]][newCell[0]] = this.index;
            this.multiply = 0;
            return;
        }
        this.eat();
    }
    newinfo(){
        this.directions = [];
        for(let i = -100; i <= 100; i ++)
            for(let j = -100; j <= 100; j ++)
                if(i==0 || j==0)
                    this.directions.push([this.x - j,this.y - i])
    }
    chooseCell(character) {
        this.newinfo();
        if(typeof character === 'number'){
            return super.chooseCell(character);
        }else{
            let found = [];
            for (var j = 0; j < character.length; j++) {
                super.chooseCell(character[j]).forEach(el => {
                    found.push(el)
                });
            }
            return found;
        }
    }
}