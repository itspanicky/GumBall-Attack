import Board from './board';
import Gumball from './gumball';
import Player from './player';


class GumBallAttack {
    constructor(ctx, canvas) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.gameWidth = canvas.width;
        this.gameHeight = canvas.height;

        // this.music = new Audio("assets/sounds/Into-Battle.mp3");

        this.gumballRadius = 80;
        this.gumballPosition = {
            x: 100,
            y: 100
        }

        this.lives = 3;
        this.level = 1;

        this.gumballSpeed = 2;
        
        // this.gumball = new Gumball(ctx, canvas, this.gumballRadius, this.gumballPosition, this.gumballSpeed);
        this.player = new Player(ctx, canvas);

        this.gumballs = [];
        // this.gumballs.push(this.gumball);
        this.gumballs.push(new Gumball(ctx, canvas, this.gumballRadius, this.gumballPosition, this.gumballSpeed));
        // this.gumballs.push(new Gumball(ctx, canvas, this.gumballRadius, {x: 400, y: 300}, this.gumballSpeed));

        this.drawLives = this.drawLives.bind(this);
        this.drawLevel = this.drawLevel.bind(this);
        // this.drawMusic = this.drawMusic.bind(this);
        this.checkCollision = this.checkCollision.bind(this);
        this.checkPlayerCollision = this.checkPlayerCollision.bind(this);
        this.checkProjectileCollision = this.checkProjectileCollision.bind(this);
        this.checkGumballCollision = this.checkGumballCollision.bind(this);
        this.duplicate = this.duplicate.bind(this);

        this.render = this.render.bind(this);
        this.preview = this.preview.bind(this);
        // this.gameOver = this.gameOver.bind(this);
        this.nextLevel = this.nextLevel.bind(this);
        // var interval = setInterval(this.render.bind(this), 10);
        // interval;
        
    }

    // drawMusic() {
    //     this.music.play();
    //     requestAnimationFrame(this.drawMusic)
    // }



    preview() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.gumballs.forEach(gumball => {
            gumball.draw();
            gumball.update();
        })
        requestAnimationFrame(this.preview)
    }

    render() {
        let player = this.player;

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        player.draw();

        if (this.player.moveable === 1) {
            player.move();
        }

        if (this.player.moveable === 0) {
            this.player.deadMsg();
        }

        this.gumballs.forEach(gumball => {
            this.checkPlayerCollision(gumball);
        })
        
        player.shoot();
        this.drawLives();
        this.drawLevel();
        
        // this.checkCollision();

        if (this.gumballs.length) {
            for (let i = 0; i < this.gumballs.length; i++) {
                for (let j = 0; j < this.gumballs.length; j++) {
                    if (j != i) {
                        this.checkGumballCollision(this.gumballs[i], this.gumballs[j]);
                    }
                }

                this.gumballs[i].draw();
                this.gumballs[i].update();
                
                // this.checkPlayerCollision(this.gumballs[i]);
                
                if (this.checkProjectileCollision(this.gumballs[i])) {
                    // delete this.gumballs[i];
                    this.duplicate(this.gumballs[i]);
                    this.gumballs.splice(i,1);
                    this.player.projectiles.splice(1,1)
                };
            }
        } 
        else {
            this.nextLevel();
        }

        // else --> next level?
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
                    // delete this.gumballs[i];
                    this.duplicate(this.gumballs[i]);
                    this.gumballs.splice(i, 1);
                    this.player.projectiles.splice(1, 1)
                };

            }
        }
    }

    checkPlayerCollision(gumball) {
        if (gumball.position.y + gumball.ballRadius >= this.player.position.y + 45 &&
            gumball.position.x + gumball.ballRadius >= this.player.position.x + 20 &&
            gumball.position.x - gumball.ballRadius <= this.player.position.x + this.player.charWidth - 20) {
            gumball.speed.dy = -gumball.speed.dy;
            gumball.position.y += gumball.speed.dy
            if (Date.now() - this.player.timer >= 1000 &&
            this.player.status != "down" && this.player.status != "dead") {
                
                this.lives--;
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
                if (this.player.proPositionX <= gumball.position.x + gumball.ballRadius &&
                this.player.proPositionX >= gumball.position.x - gumball.ballRadius &&
                this.player.proPositionY > gumball.position.y - gumball.ballRadius/1.5 && 
                this.player.proPositionY < gumball.position.y + gumball.ballRadius/1.5) {
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
            // gumball1.position.x += gumball1.speed.dx * 1.4;
            // gumball1.position.y += gumball1.speed.dy * 1.4;
            gumball1.update();
            gumball2.speed.dx = -gumball2.speed.dx;
            // gumball2.position.x += gumball2.speed.dx * 1.4;
            // gumball2.position.y += gumball2.speed.dy * 1.4;
            gumball2.update();
            
        }
    }

    duplicate(gumball) {
        const postLeft = (this.player.proPositionX - gumball.ballRadius - 40 < 0) ? gumball.ballRadius * 2 : this.player.proPositionX - gumball.ballRadius - 10;
        const postRight = (this.player.proPositionX + gumball.ballRadius + 40 > this.canvas.width) ? this.canvas.width - gumball.ballRadius * 2 : this.player.proPositionX + gumball.ballRadius + 10;

        if (gumball.ballRadius > 30) {
            this.gumballs.push(new Gumball(this.ctx, this.canvas, gumball.ballRadius - 20, {x: postLeft, y: gumball.position.y}, -this.gumballSpeed));
            this.gumballs.push(new Gumball(this.ctx, this.canvas, gumball.ballRadius - 20, {x: postRight, y: gumball.position.y}, this.gumballSpeed));
        }
    }

    nextLevel() {
        this.gumballs.push(new Gumball(ctx, canvas, 80, this.gumballPosition, this.gumballSpeed));
    }

    // gameOver() {
    //     // doesn't do anything
    //     window.cancelAnimationFrame(this.render);
    // }

    nextLevel() {
        const ctx = this.ctx;
        const canvas = this.canvas;
        // const time = Date.now();
        // while (Date.now() < time + 5000 ) {
        //     ctx.font = "40px Arial";
        //     ctx.fillStyle = "#white";
        //     ctx.fillText("Another Gumball...", canvas.width - 400, 300);
        // }
        this.level++;
        this.gumballs.push(new Gumball(ctx, canvas, this.gumballRadius + 10, this.gumballPosition, this.gumballSpeed));
    }

}

export default GumBallAttack;