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

        this.leftPressed = false;
        this.rightPressed = false;

        this.keyDownHandler = this.keyDownHandler.bind(this);
        this.keyUpHandler = this.keyUpHandler.bind(this);

        document.addEventListener("keydown", this.keyDownHandler, false);            // listen for key press
        document.addEventListener("keyup", this.keyUpHandler, false); 

        this.draw = this.draw.bind(this);
    }

    keyDownHandler(e) {        // for key press
        if (e.key == "Right" || e.key == "ArrowRight") {
            this.rightPressed = true;
        }
        else if (e.key == "Left" || e.key == "ArrowLeft") {
            this.leftPressed = true;
        }
    }   

    keyUpHandler(e) {          // for key release
        if (e.key == "Right" || e.key == "ArrowRight") {
            this.rightPressed = false;
        }
        else if (e.key == "Left" || e.key == "ArrowLeft") {
            this.leftPressed = false;
        }
    }

    draw() {
        const ctx = this.ctx;
        const canvas = this.canvas;

        ctx.beginPath();
        ctx.rect(this.position.x, this.position.y, this.width, this.height);
        ctx.fillStyle = "teal";
        ctx.fill();
        ctx.closePath();
    }

    move() {
        debugger
        const canvas = this.canvas;

        if (this.rightPressed && this.position.x < canvas.width - this.width) {
            this.position.x += 7;

        }
        else if (this.leftPressed && this.position.x > 0) {
            this.position.x -= 7;

        }
        this.draw();
    }
}

export default Player;