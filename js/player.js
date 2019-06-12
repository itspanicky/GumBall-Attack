
class Player {
    constructor(ctx, canvas) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.width = 35;
        this.height = 35;

        this.position = {
            x: this.canvas.width / 2 - this.width / 2,
            y: this.canvas.height - this.height
        }

        // this.keys = [];
        // document.addEventListener('keydown', (e) => { this.keys[e.keyCode] = true });
        // document.addEventListener('keyup', (e) => { this.keys[e.keyCode] = false })

    }

    // moveLeft() {
    //     this.position.x + 2;
    // }

    // moveRight() {
    //     this.position.x - 2;
    // }

    draw() {
        const ctx = this.ctx;
        ctx.beginPath();
        ctx.rect(this.position.x, this.position.y, this.width, this.height);
        ctx.fillStyle = "Green";
        ctx.fill();
        ctx.closePath();
    }

    // update(dt) {
    //     if (!dt) return;
    //     this.position.x += 5 / dt;
    // }
}

export default Player;