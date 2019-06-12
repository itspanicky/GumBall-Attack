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
        
        this.gumball = new Gumball(ctx, canvas, this.gumballRadius, this.gumballPosition);
        this.player = new Player(ctx, canvas);

        this.gumballs = [];
        this.gumballs.push(this.gumball);

        this.checkPlayerCollision = this.checkPlayerCollision.bind(this);
        this.checkProjectileCollision = this.checkProjectileCollision.bind(this);

        setInterval(this.render.bind(this), 10);
        
    }

    

    render() {
        let gumball = this.gumball;
        let player = this.player;

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        player.draw();
        player.move();
        player.shoot();

        gumball.draw();
        gumball.update();
        // gumball.checkCollision();
        this.checkPlayerCollision();
        this.checkProjectileCollision();

    }

    checkPlayerCollision() {
        if (this.gumball.position.y + this.gumball.ballRadius == this.canvas.height &&
            this.gumball.position.x + this.gumball.ballRadius >= this.player.position.x + 5 &&
            this.gumball.position.x - this.gumball.ballRadius <= this.player.position.x + this.player.charWidth) {
            debugger
        }
    }

    checkProjectileCollision() {
            if (this.player.projectiles.length) {
                if (this.player.proPositionX <= this.gumball.position.x + this.gumball.ballRadius &&
                this.player.proPositionX >= this.gumball.position.x - this.gumball.ballRadius &&
                this.player.proPositionY > this.gumball.position.y - this.gumball.ballRadius/2 && 
                this.player.proPositionY < this.gumball.position.y + this.gumball.ballRadius/2) {
                debugger
            }
        }
    }

    duplicate() {
        if (this.gumball.ballRadius > 10) {
            this.gumballs.push(Gumball(this.ctx, this.canvas, this.gumballRadius - 10, this.gumballPosition + 50));
            this.gumballs.push(Gumball(this.ctx, this.canvas, this.gumballRadius - 10, this.gumballPosition - 50));
        }
    }

}

export default GumBallAttack;