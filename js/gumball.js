import Player from './player';

class Gumball {
    constructor(ctx, canvas, gumballRadius, gumballPosition, gumballSpeed) {
        this.ctx = ctx;
        this.canvas = canvas;
        
        this.ballRadius = gumballRadius;

        this.position = gumballPosition;

        this.speed = {
            dx: gumballSpeed,
            dy: -Math.abs(gumballSpeed)
        };

        this.draw = this.draw.bind(this);
        this.update = this.update.bind(this);

    }

    draw() {
        const ctx = this.ctx;
        const ballRadius = this.ballRadius;
        const x = this.position.x;
        const y = this.position.y;
        
        ctx.beginPath();
        ctx.arc(x, y, ballRadius, 0, Math.PI * 2, false);
        ctx.fillStyle = "#F08080";
        ctx.fill();
        ctx.closePath();  
        
    }
    
    update() {
        const canvas = this.canvas;

        if (this.position.x + this.speed.dx > canvas.width - this.ballRadius || this.position.x + this.speed.dx < this.ballRadius) {
            this.speed.dx = -this.speed.dx;
        };

        if (this.position.y + this.speed.dy > canvas.height - this.ballRadius || this.position.y + this.speed.dy < this.ballRadius) {
            this.speed.dy = -this.speed.dy;
        };

        this.position.x += this.speed.dx;
        this.position.y += this.speed.dy;

        this.draw();
    }

}

export default Gumball;