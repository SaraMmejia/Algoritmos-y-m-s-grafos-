// ## Maze

// Write a constructor function called `Maze` that receives a number as an argument that represents the size of a board. 
// There will be a player that will be located at the top left of the board and a prize that will be located at the bottom 
// right of the board.

// Write methods `moveRight`, `moveLeft`, `moveUp`, and `moveDown` that will allow the player to move through the board 
// to reach the prize. They will return true if it is a valid move, false otherwise.

// Write a method called `getMyPosition` that returns an array with two elements representing the position of the player
// in the maze using coordinates x and y.

// Write a method called `won` that returns true if the player reached the prize.

// ```javascript
// var game = new Maze(4);
// game.moveRight(); // true
// game.won(); // false

// game.getMyPosition(); // [0, 1]
// game.moveUp(); // false

// game.moveRight(2); // true
// game.getMyPosition(); // [0, 3]
// game.won(); // false

// game.moveDown(3); // true
// game.won(); // true
// ```

// Add a method called drawBoard that draws the maze using `*` as an empty space, `R` to denote my position and `P` to the 
// note the prize.

// ```javascript
// game.drawBoard();
// // * * * *
// // * R * *
// // * * * *
// // * * * P

class Maze { 
    constructor(size) {
        this.size = size; 
        this.board = []; 

        for ( let i = 0; i < this.size; i ++ ) {
            let row = [];
            for ( let j = 0; j < this.size; j ++ ) {
                if ( i === 0 && j === 0 ) {
                    row.push("R");
                } else if ( i === this.size - 1 && j === this.size - 1 ) {
                    row.push("P");
                } else {
                    row.push("*");
                } 
            } 
            this.board.push(row);
        }
    }
    moveRight() {
        let x = 0;
        let pos = 0;
        for ( let i = 0; i < this.size; i ++ ) {
            if ( this.board [i] .indexOf ("R")  > -1  ) {
                if ( this.board [i] .indexOf ("R") === this.size -1 ) return false
                x = i;
                pos = this.board [i] .indexOf ("R")
                break;
            } 
        }
        this.board [x][pos] = '*';
        this.board [x][pos+1] = 'R';
        return true;
    }
    moveLeft () {
        let x = 0;
        let pos = 0;
        for ( let i = 0; i < this.size; i ++ ) {
            if ( this.board[i]. indexOf("R") > -1 ) {   
                if ( this.board[i]. indexOf("R") === 0 ) return false; 
                x = i; 
                pos = this.board[i]. indexOf("R")
                break;
            } 
        }
        this.board [x][pos] = "*";
        this.board [x][pos-1] = "R";
        return true;
    }
    moveUp() {
        let y = 0;
        let pos = 0; 
        for ( let i = 0; i < this.size; i ++ ) {
            if ( this.board [i] .indexOf("R") > -1 ) {
                if ( i === 0 ) return false;
                y = i; 
                pos = this.board [i] .indexOf("R"); 
                break;
            }
         }
        this.board [y][pos] = "*";
        this.board [y-1][pos] = "R";
        return true;
    }
    moveDown() {
        let y = 0; 
        let pos = 0; 
        for ( let i = 0; i < this.size; i ++ ) {
            if ( this.board [i] .indexOf("R") > -1 ) {
                if ( i === this.size - 1 ) return false; 
                y = i;
                pos = this.board [i]. indexOf("R");
                break; 
            }
        }
        this.board [y][pos] = "*";
        this.board [y + 1 ][pos] = "R";
        return true;
    }
    getMyPosition() {
        let player = [];
        for ( let i = 0; i < this.size; i ++ ) {
            if ( this.board [i].indexOf("R") > -1 ) {
                player.push(i);
                player.push(this.board [i].indexOf("R"));
                return player;
            }  
        }  
    }
    won() {
         if ( "R" === this.board[this.size - 1][this.size - 1] ) {
             return true; 
         } return false;   
    } 

    addBlock(x,y) {
        let add = (this.board[x][y].push("X") > -1 );
        console.log(add);
        if ( add === "R" || add === "P") return "the robot or the price is in that position"      
    }  
}

    
let maze = new Maze(4);
console.log(maze);
console.log(maze.addBlock(2,2));

// maze.moveRight();
// // console.log(maze);
// console.log(maze.getMyPosition());
// // console.log(maze);
// console.log(maze.won());


// Maze With Obstacles

// Add a method `addBlock` that receives a position and adds a block ('x') in that position. Return true if
//  the block can be added, false otherwise (e.g. the robot or the price is in that position).

// ```javascript
// var game = new Maze(4);
// game.addBlock(1, 1); // true
// game.addBlock(0, 0); // false - the robot is there


