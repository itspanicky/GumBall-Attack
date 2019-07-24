
class Player {
    constructor(ctx, canvas) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.timer = Date.now();
        this.sound = true;
        this.status = "idleRight";
        this.moveable = 0;

        this.charWidth = 50;
        this.charHeight = 80;
        this.position = {
            x: this.canvas.width / 2.5,
            y: this.canvas.height - this.charHeight
        }

        this.projectiles = [];
        this.totalProjectiles = 1;
        this.proPositionX = this.position.x + 10;
        this.proPositionY = canvas.height;
        this.proWidth = 18;
        this.proHeight = 70;
        this.proSpeed = 4;

    
        this.leftPressed = false;
        this.rightPressed = false;
        this.spacePressed = false;

        this.keyDownHandler = this.keyDownHandler.bind(this);
        this.keyUpHandler = this.keyUpHandler.bind(this);

        document.addEventListener("keydown", this.keyDownHandler, false);
        document.addEventListener("keyup", this.keyUpHandler, false);

        this.draw = this.draw.bind(this);
        this.drawProjectile = this.drawProjectile.bind(this);

        this.shootSound = new Audio("./assets/sounds/bow-fire.mp3");

    }

    keyDownHandler(e) {        // for key press
        if (this.status != "down" && Date.now() - this.timer > 300) { 
            if (this.moveable === 1 && this.status != "dead") {
                if (e.key == "Right" || e.key == "ArrowRight") {
                    e.preventDefault();
                    this.rightPressed = true;
                    this.leftPressed = false;
                }
                else if (e.key == "Left" || e.key == "ArrowLeft") {
                    e.preventDefault();
                    this.leftPressed = true;
                    this.rightPressed = false;
                }
                else if (e.keyCode == "32" && this.projectiles.length < this.totalProjectiles) {
                    e.preventDefault();
                    if (this.sound === true) {
                        this.shootSound.play();
                    }
                    
                    this.spacePressed = true;
                    this.proPositionX = this.position.x + 10;
                    this.projectiles.push([1]);
                }
            }
        }
    }   

    keyUpHandler(e) {          // for key release
        if (this.status != "down" || Date.now() - this.timer > 300) {
            if (this.moveable === 1 && this.status != "dead") {
                if (e.key == "Right" || e.key == "ArrowRight") {
                    e.preventDefault();
                    this.rightPressed = false;
                    this.status = "idleRight"
                }
                else if (e.key == "Left" || e.key == "ArrowLeft") {
                    e.preventDefault();
                    this.leftPressed = false;
                    this.status = "idleLeft"
                }
                else if (e.keyCode == "32") {
                    e.preventDefault();
                    this.spacePressed = false;
                }
            }
        }
    }

    draw() {
        const ctx = this.ctx;

        let idleRight = new Image();
        idleRight.src = "assets/images/avatar/idle-right.png";

        let idleLeft = new Image();
        idleLeft.src = "assets/images/avatar/left-idle.png";
        
        let left = new Image();
        left.src = "assets/images/avatar/run-left.png";

        let right = new Image();
        right.src = "assets/images/avatar/run-right.png";

        let dead = new Image();
        dead.src = "assets/images/avatar/dead.png"

        if (this.status === "left") {
            ctx.drawImage(left, this.position.x, this.position.y, this.charWidth, this.charHeight);   
        } else if (this.status === "right") {
            ctx.drawImage(right, this.position.x, this.position.y, this.charWidth, this.charHeight);
        } else if (this.status === "down") {
            ctx.drawImage(dead, this.position.x, this.position.y, this.charWidth + 20, this.charHeight);  
        } else if (this.status === "dead") {
            ctx.drawImage(dead, this.position.x, this.position.y, this.charWidth + 20, this.charHeight);
        } else if (this.status === "idleRight") {
            ctx.drawImage(idleRight, this.position.x, this.position.y, this.charWidth, this.charHeight);
        } else if (this.status === "idleLeft") {
            ctx.drawImage(idleLeft, this.position.x, this.position.y, this.charWidth, this.charHeight);
        }
        
    }

    move() {
        const canvas = this.canvas;

        if (this.rightPressed && this.position.x < canvas.width - this.charWidth - 15) {
            this.status = "right"
            this.position.x += 3.5;
        }
        else if (this.leftPressed && this.position.x > 0 + 15) {
            this.status = "left"
            this.position.x -= 3.5;
        }
        this.draw();
        
    }

    drawProjectile() {
        
        const ctx = this.ctx;

        let arrow = new Image();
        arrow.src = "assets/images/arrow.png";
        ctx.drawImage(arrow, this.proPositionX, this.proPositionY, this.proWidth, this.proHeight);
    }

    shoot() {
        if (this.projectiles.length) {
            if (this.proPositionY + this.proSpeed < 0) {
                this.projectiles = [];
                this.proPositionY = this.position.y - 30;
                
            } else {
                
                this.proPositionY -= this.proSpeed;
                this.proPositionX = this.proPositionX;
                this.drawProjectile();
            }
        }
    }

    deadMsg() {
        const ctx = this.ctx;

        ctx.font = "18px Arial";
        ctx.fillStyle = "#DC143C";
        ctx.fillText("I dead...", this.position.x, 425);
    }
}

export default Player;