import Board from './board';
import Gumball from './gumball';
import Player from './player';


class GumBallAttack {
    constructor(ctx, canvas) {
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

        this.gumballSpeed = 2;
        this.gumballStatus = 1;
        
        this.gumball = new Gumball(ctx, canvas, this.gumballRadius, this.gumballPosition, this.gumballSpeed, this.gumballStatus);
        this.player = new Player(ctx, canvas);

        this.gumballs = [];
        this.gumballs.push(this.gumball);

        this.drawLives = this.drawLives.bind(this);
        this.checkPlayerCollision = this.checkPlayerCollision.bind(this);
        this.checkProjectileCollision = this.checkProjectileCollision.bind(this);
        this.duplicate = this.duplicate.bind(this);

        var interval = setInterval(this.render.bind(this), 10);
        interval;
        
    }

    

    render() {
        let gumball = this.gumball;
        let player = this.player;

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        player.draw();
        player.move();
        player.shoot();

        if (this.gumballs.length) {
            for (let i = 0; i < this.gumballs.length; i++) {

                this.gumballs[i].draw();
                this.gumballs[i].update();
                
                this.checkPlayerCollision(this.gumballs[i]);

                if (this.checkProjectileCollision(this.gumballs[i])) {
                    // delete this.gumballs[i];
                    this.duplicate(this.gumballs[i]);
                    this.gumballs.splice(i,1);
                    this.player.projectiles.splice(1,1)
                    // this.player.proStatus = 0;
                    // this.gumballs[i].status = 0;
                    break;
                };
            }
        }
        this.drawLives();
        
    }

    drawLives() {
        const ctx = this.ctx;
        const canvas = this.canvas;

        ctx.font = "16px Arial";
        ctx.fillStyle = "#white";
        ctx.fillText("Lives: " + this.lives, canvas.width - 65, 20);
    }

    checkPlayerCollision(gumball) {
        if (gumball.position.y + gumball.ballRadius == this.canvas.height &&
            gumball.position.x + gumball.ballRadius >= this.player.position.x + 5 &&
            gumball.position.x - gumball.ballRadius <= this.player.position.x + this.player.charWidth) {
                this.lives--;
            if (!this.lives) {   
                alert("GAME OVER");
                document.location.reload();
            }
        }
    }

    checkProjectileCollision(gumball) {
            if (this.player.projectiles.length) {
                if (this.player.proPositionX <= gumball.position.x + gumball.ballRadius &&
                this.player.proPositionX >= gumball.position.x - gumball.ballRadius &&
                this.player.proPositionY > gumball.position.y - gumball.ballRadius/2 && 
                this.player.proPositionY < gumball.position.y + gumball.ballRadius/2) {
                    return true;
            }
        }
    }

    duplicate(gumball) {
        const postLeft = (this.player.proPositionX - gumball.ballRadius - 15 < 0) ? gumball.ballRadius + 15 : this.player.proPositionX - gumball.ballRadius - 15;
        const postRight = (this.player.proPositionX + gumball.ballRadius + 30 > this.canvas.width) ? this.canvas.width - gumball.ballRadius - 50 : this.player.proPositionX + gumball.ballRadius + 30;
        if (this.gumball.ballRadius > 10) {

            this.gumballs.push(new Gumball(this.ctx, this.canvas, gumball.ballRadius - 20, {x: postLeft, y: gumball.position.y}, -this.gumballSpeed, 1));
            this.gumballs.push(new Gumball(this.ctx, this.canvas, gumball.ballRadius - 20, {x: postRight, y: gumball.position.y}, this.gumballSpeed, 1));
        }
    }

}

export default GumBallAttack;