import Gumball from './gumball';

class GumBallAttack {
    constructor(ctx, canvas, player) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.gameWidth = canvas.width;
        this.gameHeight = canvas.height;
        
        this.start = false;
        this.sound = true;

        this.gumballRadius = 80;
        this.gumballPosition = {
            x: 100,
            y: 100
        }
        
        this.player = player;
        this.lives = 3;
        this.level = 1;

        this.gumballSpeed = 2;
        

        this.gumballs = [];

        this.gumballs.push(new Gumball(ctx, canvas, this.gumballRadius, this.gumballPosition, this.gumballSpeed));

        this.drawLives = this.drawLives.bind(this);
        this.drawLevel = this.drawLevel.bind(this);

        this.checkCollision = this.checkCollision.bind(this);
        this.checkPlayerCollision = this.checkPlayerCollision.bind(this);
        this.checkProjectileCollision = this.checkProjectileCollision.bind(this);
        this.checkGumballCollision = this.checkGumballCollision.bind(this);
        this.duplicate = this.duplicate.bind(this);

        this.render = this.render.bind(this);
        this.nextLevel = this.nextLevel.bind(this);

        this.bounce = new Audio("./assets/sounds/bounce.mp3")
        this.pop = new Audio("./assets/sounds/pop.mp3")
        
    }   
        
    render() {
        let player = this.player;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        if (this.start === true) {
            player.draw();
            if (player.moveable === 1 && player.status != "down") {
                player.move();
            }
            player.shoot();

            if (player.moveable === 0) {
                player.deadMsg();
            }
            this.drawLives();
            this.drawLevel();

            this.gumballs.forEach(gumball => {
                this.checkPlayerCollision(gumball);
            })
        }

        if (this.gumballs.length) {
            for (let i = 0; i < this.gumballs.length; i++) {
                for (let j = 0; j < this.gumballs.length; j++) {
                    if (j != i) {
                        this.checkGumballCollision(this.gumballs[i], this.gumballs[j]);
                    }
                }

                this.gumballs[i].draw();
                this.gumballs[i].update();
                
                if (this.checkProjectileCollision(this.gumballs[i]) && player.status != "dead") {
                    
                    this.duplicate(this.gumballs[i]);
                    this.gumballs.splice(i,1);
                    player.projectiles.splice(1,1)
                };
            }
        } else {
            this.nextLevel();
        }
        
        requestAnimationFrame(this.render);
    }

    drawLives() {
        const ctx = this.ctx;
        const canvas = this.canvas;

        ctx.font = "18px Arial";
        ctx.fillStyle = "#white";
        ctx.fillText("Lives: " + this.lives, canvas.width - 75, 30);
    }

    drawLevel() {
        const ctx = this.ctx;

        ctx.font = "18px Arial";
        ctx.fillStyle = "#white";
        ctx.fillText("Level: " + this.level, 20, 30);
    }

    checkCollision() {
        if (this.gumballs.length) {
            for (let i = 0; i < this.gumballs.length; i++) {
                for (let j = 0; j < this.gumballs.length; j++) {
                    if (j != i) {
                        this.checkGumballCollision(this.gumballs[i], this.gumballs[j]);
                    }
                }
                
                if (this.checkProjectileCollision(this.gumballs[i])) {
                    this.duplicate(this.gumballs[i]);
                    this.gumballs.splice(i, 1);
                    this.player.projectiles.splice(1, 1)
                };
            }
        }
    }

    checkPlayerCollision(gumball) {
        if (gumball.position.y + gumball.ballRadius >= this.player.position.y + 40 &&
            gumball.position.x + gumball.ballRadius >= this.player.position.x + 10 &&
            gumball.position.x - gumball.ballRadius <= this.player.position.x + this.player.charWidth - 10) {
            gumball.speed.dy = -gumball.speed.dy;
            gumball.position.y += gumball.speed.dy
            if (Date.now() - this.player.timer >= 1000 &&
            this.player.status != "down" && 
            this.player.status != "dead") {
                if (this.sound === true) {
                    this.bounce.play();
                }
                this.lives--;
                this.player.leftPressed = false;
                this.player.rightPressed = false;
                this.player.spacePressed = false;
                this.player.status = "down";
                this.player.timer = Date.now();

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
            }
        }
    }

    checkProjectileCollision(gumball) {
            if (this.player.projectiles.length) {
                if (this.player.proPositionX < gumball.position.x + gumball.ballRadius - 4 &&
                this.player.proPositionX > gumball.position.x - gumball.ballRadius + 4 &&
                this.player.proPositionY > gumball.position.y - gumball.ballRadius - 6 && 
                this.player.proPositionY < gumball.position.y + gumball.ballRadius - 4) {
                debugger
                return true;
                
            }
        }
    }

    checkGumballCollision(gumball1, gumball2) {
        let dx = gumball1.position.x - gumball2.position.x;
        let dy = gumball1.position.y - gumball2.position.y;
        let distance = Math.sqrt((dx * dx) + (dy * dy));
        if (distance < gumball1.ballRadius + gumball2.ballRadius) {
            if (gumball1.speed.dy * gumball2.speed.dy < 0) {
                gumball1.speed.dy = -gumball1.speed.dy;
                gumball2.speed.dy = -gumball2.speed.dy;
            }
            gumball1.speed.dx = -gumball1.speed.dx;
            gumball1.position.x += gumball1.speed.dx;
            gumball1.position.y += gumball1.speed.dy;

            gumball2.speed.dx = -gumball2.speed.dx;
            gumball2.position.x += gumball2.speed.dx;
            gumball2.position.y += gumball2.speed.dy;
            
        }
        
    }

    duplicate(gumball) {
        const postLeft = (this.player.proPositionX - gumball.ballRadius - 45 < 0) ? gumball.ballRadius * 2 : this.player.proPositionX - gumball.ballRadius - 20;
        const postRight = (this.player.proPositionX + gumball.ballRadius + 45 > this.canvas.width) ? this.canvas.width + gumball.ballRadius * 2 : this.player.proPositionX + gumball.ballRadius + 20;

        if (this.sound === true) {
            this.pop.play();
        }

        if (gumball.ballRadius > 30) {
            
            this.gumballs.push(new Gumball(this.ctx, this.canvas, gumball.ballRadius - 20, {x: postLeft, y: gumball.position.y}, -this.gumballSpeed));
            this.gumballs.push(new Gumball(this.ctx, this.canvas, gumball.ballRadius - 20, {x: postRight, y: gumball.position.y}, this.gumballSpeed));
        }
    }

    nextLevel() {
        const ctx = this.ctx;
        const canvas = this.canvas;
        this.level++;
        this.gumballs.push(new Gumball(ctx, canvas, this.gumballRadius + 10, this.gumballPosition, this.gumballSpeed));
    }
}

export default GumBallAttack;