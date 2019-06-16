class Player {
    constructor(ctx, canvas) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.timer = Date.now();
        
        this.status = "idleRight";
        this.moveable = 1;

        this.charWidth = 50;
        this.charHeight = 80;
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
        this.proSpeed = 5;

    
        this.leftPressed = false;
        this.rightPressed = false;
        this.spacePressed = false;

        this.keyDownHandler = this.keyDownHandler.bind(this);
        this.keyUpHandler = this.keyUpHandler.bind(this);

        document.addEventListener("keydown", this.keyDownHandler, false);
        document.addEventListener("keyup", this.keyUpHandler, false);

        this.draw = this.draw.bind(this);
        // this.idleState = this.idleState.bind(this);
        this.drawProjectile = this.drawProjectile.bind(this);
    }

    keyDownHandler(e) {        // for key press
        if (this.status === "down") {
            if (Date.now() - this.timer > 1000) this.status = "idleRight"
        }

        if (this.moveable === 1 && this.status != "dead") {
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
        
    }   

    keyUpHandler(e) {          // for key release
        if (this.status === "down") {
            if (Date.now() - this.timer > 1000) this.status = "idleRight"
        }

        if (this.moveable === 1 && this.status != "dead") {
            if (e.key == "Right" || e.key == "ArrowRight") {
                this.rightPressed = false;
                this.status = "idleRight"
            }
            else if (e.key == "Left" || e.key == "ArrowLeft") {
                this.leftPressed = false;
                this.status = "idleLeft"
            }
            else if (e.keyCode == "32") {
                this.spacePressed = false;
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

        // let down = new Image();
        // down.src = "assets/images/avatar/down.png";

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

    // idleState() {
    //     const ctx = this.ctx;

    //     let idle1 = new Image();
    //     idle1.src = "assets/images/avatar/idle (1).png";

    //     let idle2 = new Image();
    //     idle1.src = "assets/images/avatar/idle (2).png";

    //     let idle3 = new Image();
    //     idle1.src = "assets/images/avatar/idle (3).png";

    //     let idle4 = new Image();
    //     idle1.src = "assets/images/avatar/idle (4).png";

    //     let idle5 = new Image();
    //     idle1.src = "assets/images/avatar/idle (5).png";

    //     let idle6 = new Image();
    //     idle1.src = "assets/images/avatar/idle (6).png";

    //     let idle7 = new Image();
    //     idle1.src = "assets/images/avatar/idle (7).png";

    //     let idle8 = new Image();
    //     idle1.src = "assets/images/avatar/idle (8).png";
        

    //     ctx.drawImage(idle1, this.position.x, this.position.y, this.charWidth, this.charHeight);
    //     ctx.drawImage(idle2, this.position.x, this.position.y, this.charWidth, this.charHeight);
    //     ctx.drawImage(idle3, this.position.x, this.position.y, this.charWidth, this.charHeight);
    //     ctx.drawImage(idle4, this.position.x, this.position.y, this.charWidth, this.charHeight);
    //     ctx.drawImage(idle5, this.position.x, this.position.y, this.charWidth, this.charHeight);
    //     ctx.drawImage(idle6, this.position.x, this.position.y, this.charWidth, this.charHeight);
    //     ctx.drawImage(idle7, this.position.x, this.position.y, this.charWidth, this.charHeight);
    //     ctx.drawImage(idle8, this.position.x, this.position.y, this.charWidth, this.charHeight);

    // }

    move() {
        const canvas = this.canvas;
        if (this.moveable === 1) {
            if (Date.now() - this.timer >= 1000 || this.status != "dead") {
                if (this.rightPressed && this.position.x < canvas.width - this.charWidth) {
                    this.status = "right"
                    this.position.x += 3;
                }
                else if (this.leftPressed && this.position.x > 0) {
                    this.status = "left"
                    this.position.x -= 3;
                    
                }
                this.draw();
            }
        }
        
    }

    drawProjectile() {
        const ctx = this.ctx;
        let postX;
        if (this.projectiles.length && this.status === "right" || this.status === "idleRight") {
            postX = this.proPositionX;
        } else if ((this.projectiles.length && this.status === "left" || this.status === "idleLeft")) {
            postX = this.proPositionX;
        }

        ctx.beginPath();
        ctx.rect(postX, this.proPositionY, this.proWidth, this.proHeight);
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.closePath();
    }

    shoot() {
        if (this.projectiles.length) {
            if (this.proPositionY + this.proSpeed < 0) {
                this.projectiles = [];
                this.proPositionY = this.position.y - 60;
            } else {
                this.proPositionY -= this.proSpeed;
                this.proPositionX = this.proPositionX;
                this.drawProjectile();
            }
        }
    }

    deadMsg() {
        const ctx = this.ctx;

        ctx.font = "16px Arial";
        ctx.fillStyle = "#DC143C";
        ctx.fillText("I dead...", this.position.x, 425);
    }
}

export default Player;