class Player {
    constructor(ctx, canvas) {
        this.ctx = ctx;
        this.canvas = canvas;

        this.charWidth = 30;
        this.charHeight = 35;
        this.position = {
            x: this.canvas.width / 2 - this.charWidth / 2,
            y: this.canvas.height - this.charHeight
        }

        this.projectiles = [];
        this.totalProjectiles = 1;
        this.proPositionX = this.position.x + 10;
        this.proPositionY = this.position.y - 60;
        this.proWidth = 5;
        this.proHeight = 70;
        this.proSpeed = 10;

    
        this.leftPressed = false;
        this.rightPressed = false;
        this.spacePressed = false;

        this.keyDownHandler = this.keyDownHandler.bind(this);
        this.keyUpHandler = this.keyUpHandler.bind(this);

        document.addEventListener("keydown", this.keyDownHandler, false);
        document.addEventListener("keyup", this.keyUpHandler, false);

        this.draw = this.draw.bind(this);
        this.drawProjectile = this.drawProjectile.bind(this);
    }

    keyDownHandler(e) {        // for key press
        if (e.key == "Right" || e.key == "ArrowRight") {
            this.rightPressed = true;
        }
        else if (e.key == "Left" || e.key == "ArrowLeft") {
            this.leftPressed = true;
        }
        else if (e.keyCode == "32" && this.projectiles.length < this.totalProjectiles) {
            this.spacePressed = true;
            this.proPositionX = this.position.x + 10;
            this.projectiles.push([1]);
        }
    }   

    keyUpHandler(e) {          // for key release
        if (e.key == "Right" || e.key == "ArrowRight") {
            this.rightPressed = false;
        }
        else if (e.key == "Left" || e.key == "ArrowLeft") {
            this.leftPressed = false;
        }
        else if (e.keyCode == "32") {
            this.spacePressed = false;
        }
    }

    draw() {
        const ctx = this.ctx;
        ctx.beginPath();
        ctx.rect(this.position.x, this.position.y, this.charWidth, this.charHeight);
        ctx.fillStyle = "teal";
        ctx.fill();
        ctx.closePath();
    }

    move() {
        const canvas = this.canvas;

        if (this.rightPressed && this.position.x < canvas.width - this.charWidth) {
            this.position.x += 7;
            
        }
        else if (this.leftPressed && this.position.x > 0) {
            this.position.x -= 7;
            
        }
        this.draw();
    }

    drawProjectile() {
        const ctx = this.ctx;

        if (this.projectiles.length) {
            ctx.beginPath();
            ctx.rect(this.proPositionX, this.proPositionY, this.proWidth, this.proHeight);
            ctx.fillStyle = "black";
            ctx.fill();
            ctx.closePath();

        }
    }

    shoot() {
        if (this.projectiles.length) {
            if (this.proPositionY + this.proSpeed < 0) {
                this.projectiles = [];
                this.proPositionY = this.position.y - 60;
            } else {
                this.proPositionY -= this.proSpeed;
                this.drawProjectile();
            }
        }
    }
}

export default Player;