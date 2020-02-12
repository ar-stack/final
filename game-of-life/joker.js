let LivingCreature = require('./LivingCreature')
module.exports = class Joker extends LivingCreature{
    constructor(x, y, index, multiply) {
        super(x, y, index, multiply);
        this.index = index;
        this.energy = 5
        this.directions = [];
        
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 2, this.y - 2],
            [this.x - 1, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 1, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y - 1],
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x + 2, this.y - 1],
            [this.x - 2, this.y],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x + 2, this.y],
            [this.x - 2, this.y + 1],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x + 2, this.y + 1],
            [this.x - 2, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x + 2, this.y + 2]
        ];
    }

    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character);
   
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
    chooseCell3(character, character2) {
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

			matrix[newY][newX] = 4
			matrix[this.y][this.x] = 0;

			this.x = newX;
			this.y = newY
		}

		
		if (this.energy <= 0) {
			this.die();
		}


    }
    eat() {
        let emptyCells = super.chooseCell(1);
        let newCell = predatorArr[Math.floor[Math.random()* emptyCells.length]];
            if (newCell) {
                
                matrix[newCell[1]] [newCell[0]] == this.index;
                matrix[this.y][this.x] = 0;
    
                this.x = newCell[0];
                this.y = newCell[1];
         if(matrix[newY][newX] == 2) {
            for (let i in grasseaterArr) {
                if (newX === grasseaterArr[i].x && newY === grasseaterArr[i].y) {
                    grasseaterArr.splice(i, 1);
                    break;
                }
            }
         }else if( matrix[newY][newX] == 3) {

            for (let i in predatorArr) {
                if (newX === predatorArr[i].x && newY === predatorArr[i].y) {
                    predatorArr.splice(i, 1);
                    break;
                }
            }
         }


           

            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 0;

            this.x = newX;
            this.y = newY;
            this.energy += 1
        }
    }
    mul() {

        let emptyCells = super.chooseCell(0);
        var newCell = jokerArr[Math.floor[Math.random()* emptyCells.length]];

        if (this.energy >= 7 && newCell) {

            var newJoker = new Joker(newCell[0], newCell[1], matrix[this.y][this.x]);
            jokerArr.push(newJoker);
            matrix[newCell[1]][newCell[0]] = matrix[this.y][this.x]
            this.energy = 5;
        }
        // if (weath == "summer") {
        //     this.energy += 3;
        //     this.multiply += 3;
        // }
        // if (weath == "autumn") {
        //     this.energy--;
        //     this.multiply--;
        // }
    }

    die() {
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