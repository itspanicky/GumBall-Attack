# GumBall Attack!

[Play](https://itspanicky.github.io/GumBall-Attack/)

#### Gumball Attack! is built using HTML5 Canvas and Vanilla Javascript based on object-oriented principles. Web Audio API is incorporated to add sound effects for a more enjoyable gameplay. Webpack is used to bundle all scripts into a single source.

![alt text](https://github.com/itspanicky/GumBall-Attack/blob/master/assets/images/game-gif.gif)

## Background and Overview
GumBall Attack is a simple arcade game with basic controls. The gameplay involves controlling a character left or right while dodging bouncing giant gumballs. The character can also shoot projectiles straight up, which on impact with a gumball will split the gumball into two smaller gumballs.

Although a seemingly easy concept, GumBall Attack becomes more difficult as there are more bouncing gumballs.

The inspiration for GumBall Attack comes from a game called Bubble Struggle, which I played countless times for hours as a kid.

## Technologies
- Vanilla javascript for game logic.
- HTML5 canvas for game rendering.
- Web Audio API to handle music and sound effect.
- Webpack to bundle scripts into a single source.

## Functionality
- Users can press left/right arrow keys to move in that direction. The character's movements are limited by the walls of the canvas and whether it has been hit by a gumball.
```javascript
    move() {
        const canvas = this.canvas;

        if (this.rightPressed && this.position.x < canvas.width - this.charWidth - 15) {
            this.status = "right"
            this.position.x += 3.5;
        }
        else if (this.leftPressed && this.position.x > 0 + 15) {
            this.status = "left"
            this.position.x -= 3.5;
        }
        this.draw();
        
    }
```


- Gumballs will bounce away when a collision is detected.
```javascript
    checkGumballCollision(gumball1, gumball2) {
        let dx = gumball1.position.x - gumball2.position.x;
        let dy = gumball1.position.y - gumball2.position.y;
        let distance = Math.sqrt((dx * dx) + (dy * dy));
        if (distance < gumball1.ballRadius + gumball2.ballRadius) {
            if (gumball1.speed.dy * gumball2.speed.dy < 0) {
                gumball1.speed.dy = -gumball1.speed.dy;
                gumball2.speed.dy = -gumball2.speed.dy;
            }

            if (gumball1.position.x + gumball1.ballRadius < gumball2.position.x && 
                gumball1.position.x + gumball1.ballRadius > gumball2.position.x - gumball2.ballRadius) {
                gumball1.position.x = gumball2.position.x - gumball2.ballRadius - gumball1.ballRadius
            } else if (gumball1.position.x - gumball1.ballRadius > gumball2.position.x &&
                gumball1.position.x - gumball1.ballRadius < gumball2.position.x + gumball2.ballRadius) {
                gumball1.position.x = gumball2.position.x + gumball2.ballRadius + gumball1.ballRadius
            }

            gumball1.speed.dx = -gumball1.speed.dx;
            gumball1.position.x += gumball1.speed.dx;
            gumball1.position.y += gumball1.speed.dy;

            gumball2.speed.dx = -gumball2.speed.dx;
            gumball2.position.x += gumball2.speed.dx;
            gumball2.position.y += gumball2.speed.dy;
            
        }
        
    }
```


- Gumballs will split into two smaller gumballs when it collides with a projectile.
```javascript
    duplicate(gumball) {
        if (gumball.ballRadius > 20) {
            this.gumballs.push(new Gumball(this.ctx, this.canvas, gumball.ballRadius - 20, {x: postLeft, y: gumball.position.y}, -this.gumballSpeed));
            this.gumballs.push(new Gumball(this.ctx, this.canvas, gumball.ballRadius - 20, {x: postRight, y: gumball.position.y}, this.gumballSpeed));
        }
    }
```


- The game ends when all lives are lost and a life is lost when a gumball collides with the player.
```javascript
    if (this.lives <= 0) {   
        this.player.moveable = 0;
        this.player.status = "dead";

        const gameMenu = document.getElementById("game-menu");
        gameMenu.setAttribute("style", "visibility: visible;");
        const startMenu = document.getElementById("start-menu");
        startMenu.setAttribute("style", "visibility: hidden");
        const retryMenu = document.getElementById("retry-menu");
        retryMenu.setAttribute("style", "visibility: visible;");
    }
```


## MVP
- Interactive starting screen
- Player can move avatar
- Avatar can shoot projectile that can collide with gumballs
- Gumballs can bounce along walls of game
- Gumballs can split into a two smaller gumballs upon collision with a projectile
- Gumballs can cause lost of life or game over upon collision with avatar 
- Lives can be tracked
- Levels can be tracked

## Credits
- Avatar - https://www.gameart2d.com/the-boy---free-sprites.html
