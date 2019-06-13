import Board from './board';
import Gumball from './gumball';
import Player from './player';


class GumBallAttack {
    constructor(ctx, canvas, level) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.gameWidth = canvas.width;
        this.gameHeight = canvas.height;

        this.gumballRadius = 80;
        this.gumballPosition = {
            x: 100,
            y: 100
        }

        this.lives = 3;

        this.gumballSpeed = 1;
        
        // this.gumball = new Gumball(ctx, canvas, this.gumballRadius, this.gumballPosition, this.gumballSpeed);
        this.player = new Player(ctx, canvas);

        this.gumballs = [];
        // this.gumballs.push(this.gumball);
        this.gumballs.push(new Gumball(ctx, canvas, this.gumballRadius, this.gumballPosition, this.gumballSpeed));
        // this.gumballs.push(new Gumball(ctx, canvas, this.gumballRadius, {x: 400, y: 300}, this.gumballSpeed));

        this.drawLives = this.drawLives.bind(this);
        this.checkCollision = this.checkCollision.bind(this);
        this.checkPlayerCollision = this.checkPlayerCollision.bind(this);
        this.checkProjectileCollision = this.checkProjectileCollision.bind(this);
        this.checkGumballCollision = this.checkGumballCollision.bind(this);
        this.duplicate = this.duplicate.bind(this);
        this.render = this.render.bind(this);
        this.preview = this.preview.bind(this);
        // var interval = setInterval(this.render.bind(this), 10);
        // interval;
        
    }

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
        player.move();
        this.gumballs.forEach(gumball => {
        //     gumball.draw();
        //     gumball.update();
            this.checkPlayerCollision(gumball);
        })
        
        player.shoot();
        this.drawLives();
        
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

        // else --> next level?
        requestAnimationFrame(this.render)
    }

    drawLives() {
        const ctx = this.ctx;
        const canvas = this.canvas;

        ctx.font = "16px Arial";
        ctx.fillStyle = "#white";
        ctx.fillText("Lives: " + this.lives, canvas.width - 65, 20);
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
        if (gumball.position.y + gumball.ballRadius >= this.player.position.y + 30 &&
            gumball.position.x + gumball.ballRadius >= this.player.position.x + 15 &&
            gumball.position.x - gumball.ballRadius <= this.player.position.x + this.player.charWidth - 50) {
            gumball.speed.dy = -gumball.speed.dy;
            gumball.position.y += gumball.speed.dy
            if (Date.now() - this.player.timer >= 700 &&
            this.player.status != "dead") {
                this.lives--;
                this.player.status = "dead";
                this.player.timer = Date.now();
            }
            debugger
            if (!this.lives) {   
                this.player.status = "dead";
                alert("GAME OVER");
                document.location.reload();
                
                // const gameMenu = document.getElementById("game-menu")
                // gameMenu.setAttribute("style", "visibility: hidden;");
                // const retryMenu = document.getElementById("retry-menu");

            }
        }
    }

    checkProjectileCollision(gumball) {
            if (this.player.projectiles.length) {
                if (this.player.proPositionX <= gumball.position.x + gumball.ballRadius &&
                this.player.proPositionX >= gumball.position.x - gumball.ballRadius &&
                this.player.proPositionY > gumball.position.y - gumball.ballRadius/2 && 
                this.player.proPositionY < gumball.position.y + gumball.ballRadius/2) {
                    this.ctx.clearRect(this.player.proPositionX, this.player.proPositionY, this.player.proWidth, this.player.proHeight);
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

}

export default GumBallAttack;