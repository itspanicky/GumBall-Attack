
class Gumball {
    constructor(ctx) {
        this.ctx = ctx;
    }

    drawGumball() {
        const ctx = this.ctx;

        var x = canvas.width / 2;
        var y = canvas.height - 30;
        var ballRadius = 40;
        var dx = 2;
        var dy = -2;

        
        ctx.beginPath();
        ctx.arc(x, y, ballRadius, 0, Math.PI*2, false);
        ctx.fillStyle = "teal";
        ctx.fill();
        ctx.closePath();

        // x += dx;
        // y += dy;

    }

    render() {
        const ctx = this.ctx;

        // ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.drawGumball();

        if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
            dx = -dx;
        }
        if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
            dy = -dy;
        }

        x += dx;
        y += dy;
    }

}

export default Gumball;