let LivingCreature = require('./LivingCreature')

module.exports = class Predator  extends LivingCreature{
        constructor(x, y, index) {
            super(x, y, index)
            this.energy = 5
            this.directions = [];
        }
        getNewCoordinates() {
            this.directions = [
                [this.x - 1, this.y - 1],
                [this.x, this.y - 1],
                [this.x + 1, this.y - 1],
                [this.x - 1, this.y],
                [this.x + 1, this.y],
                [this.x - 1, this.y + 1],
                [this.x, this.y + 1],
                [this.x + 1, this.y + 1]
            ];
        }
        
    
        chooseCell2(character, character2) {
            this.getNewCoordinates();
            var found = [];
            for (var i in this.directions) {
                var x = this.directions[i][0];
                var y = this.directions[i][1];
                if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                    if (matrix[y][x] == character || matrix[y][x] == character2) {
                        found.push(this.directions[i]);
                    }
                }
            }
            return found;
        }
    
       
	move() {
		var emptyCells = super.chooseCell(0);
		var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
        this.energy--;
		if (newCell) {
			var newX = newCell[0];
			var newY = newCell[1];

			matrix[newY][newX] = 3
			matrix[this.y][this.x] = 0;

			this.x = newX;
			this.y = newY
		}

		
		if (this.energy <= 0) {
			this.die();
		}
    
    
        }
        eat() {
            var grassCells = super.chooseCell(1);
            var newCell = grassCells[Math.floor(Math.random() * grassCells.length)]
    
            if (newCell) {
    
                var newX = newCell[0];
                var newY = newCell[1];
    
                matrix[newY][newX] = matrix[this.y][this.x];
                matrix[this.y][this.x] = 0;
    
                for (var i in jokerArr) {
                    if (jokerArr[i].x == newX && jokerArr[i].y == newY) {
                        jokerArr.splice(i, 1)
                    }
                }
    
                
                this.y = newY;
                this.x = newX;
                this.energy++;
    
                if (this.energy >= 12) {
                    this.mul();
                    this.energy = 8
                }
    
            }
            else {
                this.move();
            }
        }
        // eat() {
        //     let emptyCells = super.chooseCell(1);
        //     let grasseater = emptyCells[Math.floor[Math.random() * emptyCells.length]];
       
        //      let newCell = random(this.chooseCell(1));
        //     if (newCell) {
                
        //         matrix[newCell[1]][newCell[0]] = matrix[this.y][this.x];
        //         matrix[this.y][this.x] = 0;
    
        //         this.x = newCell[0];
        //         this.y = newCell[1];
    
        //         for(let i in grassArr)
        //             if(this.x == grassArr[i].x && this.y == grassArr[i].y){
        //                 grassArr.splice(i,1);
        //                 break;
        //             }
        //         this.energy ++;
        //         this.multiply++;
            
        //         return;
               
        //     }
        //     this.move();
        // }
        // mul() {
    
        //     let emptyCells = super.chooseCell(1);
        //     var newCell = emptyCells[Math.floor[Math.random()* emptyCells.length]];
    
    
        //     if (this.energy >= 8 && newCell) {
    
        //         var newPredator = new Predator(newCell[0], newCell[1], matrix[this.y][this.x]);
        //         predatorArr.push(newPredator);
        //         matrix[newCell[1]][newCell[0]] = this.index;
        //         this.energy = 5;
        //     }
        //     // if (weath == "winter") {
        //     //     this.energy -= 2;
        //     //     this.multiply -= 2;
        //     // }
        //     // if (weath == "spring") {
        //     //     this.energy += 5;
        //     //     this.multiply += 5;
        //     // }
        // }
        mul() {
            var emptyCells = super.chooseCell(0);
            var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
            if (newCell) {
                var newX = newCell[0];
                var newY = newCell[1];
                matrix[newY][newX] = 2
                predatorArr.push(new Predator(newX, newY, 2))
                this.energy = 6;
            }
          
    
        }
        
        // eat(){
        //     var grasseaterCells = super.chooseCell(1);
        //     let newCell =  grasseaterCells[Math.floor[Math.random()* this.chooseCell(2)]];
        //     if (newCell) {
                
        //         matrix[newCell[1]] [newCell[0]] = this.index;
        //         matrix[this.y][this.x] = 0;
    
        //         this.x = newCell[0];
        //         this.y = newCell[1];
    
        //         for(let i in grasseaterArr)
        //             if(this.x == grasseaterArr[i].x && this.y == grasseaterArr[i].y){
        //                 grasseaterArr.splice(i,1);
        //                 break;
        //             }
        //         this.energy++;
        //         this.multiply++;
    
        //         return;
        //     }
        //     this.move();
        // }






    
        die(){
            if (this.energy <= 0) {
                matrix[this.y][this.x] = 0;
                for (var i in predatorArr) {
                    if (this.x == predatorArr[i].x && this.y == predatorArr[i].y) {
                        predatorArr.splice(i, 1);
                    }
                }
            }
        }
    
    
    }