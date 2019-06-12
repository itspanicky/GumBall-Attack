
class Gumball {
    constructor(ctx, canvas) {
        this.ctx = ctx;
        this.gameWidth = canvas.gameWidth;
        this.gameHeight = canvas.gameHeight;
        
        this.ballRadius = 80;

        this.position = {
            x: 100,
            y: 100
        };

        this.speed = {
            dx: 20,
            dy: 20 
        };

        this.draw = this.draw.bind(this);
    }

    draw() {
        const ctx = this.ctx;
        const ballRadius = this.ballRadius;
        const x = this.position.x;
        const y = this.position.y;
        debugger
        ctx.clearRect(0, 0, this.gameWidth, this.gameHeight);
        ctx.beginPath();
        ctx.arc(x, y, ballRadius, 0, Math.PI * 2, false);
        ctx.fillStyle = "teal";
        ctx.fill();
        ctx.closePath();
        
    }

    update() {
        // values become NaN
        // let x = this.position.x;
        // let y = this.position.y;
        // let dx = this.speed.x;
        // let dy = this.speed.y;

        if (this.position.x + this.speed.dx > this.gameWidth - this.ballRadius || this.position.x + this.speed.dx < this.ballRadius) {
            this.speed.dx = -this.speed.dx;
        };

        if (this.position.y + this.speed.dy > this.gameHeight - this.ballRadius || this.position.y + this.speed.dy < this.ballRadius) {
            this.speed.dy = -this.speed.dy;
        };

        this.position.x += this.speed.dx;
        this.position.y += this.speed.dy;
        debugger
        // requestAnimationFrame(this.draw)
        // setInterval(this.draw, 10);
    }

}

export default Gumball;