// Enemies our player must avoid
var Enemy = function(x,y,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = 101 *( Math.floor(Math.random()*1)-3);
    this.y = 75 *( Math.floor(Math.random()*3)+1);    
    this.speed = 400;
};


// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    var distance = this.speed*dt;
    this.x = this.x+distance;
    // when off canvas, reset position of enemy to move across again

    if (this.x > 550) {
        this.x = -100;
        this.speed = Math.floor(Math.random() * 512)+50;
    }
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

    

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

class Player {
    constructor (x,y){
        this.sprite = "images/char-boy.png";
        this.x=x;
        this.y=y;
    }
    update(){

        }
    render(){
            ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
        }
    reset(x, y) { 
     this.x = x;
     this.y = y;
}

    handleInput(input){
        if (input === "left" && this.x > 99) {
            this.x-=100;
        }
        if (input==="right" && this.x < 306) {
            this.x+=100;
        }
        if (input=== "up") {
            this.y -= 83;
        }
        if (input==="down" && this.y < 400) {
            this.y += 83;
        }

        }

}
 
let player = new Player (200,400) 

let allEnemies = [];
    allEnemies.push(new Enemy() );
    allEnemies.push(new Enemy() );
    allEnemies.push(new Enemy() );
    allEnemies.push(new Enemy() );


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
