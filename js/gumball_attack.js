import Board from './board';
import Gumball from './gumball';
import Player from './player';


class GumBallAttack {
    constructor(ctx, canvas) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.gameWidth = canvas.width;
        this.gameHeight = canvas.height;

        this.gumball = new Gumball(ctx, canvas);
        this.player = new Player(ctx, canvas);
        setInterval(this.render.bind(this), 10);
    }

    

    render() {
        let gumball = this.gumball;
        let player = this.player;

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        player.draw();
        player.move();
        
        gumball.draw();
        gumball.update();

    }

    // play() {
    //     const ctx = this.ctx;
    //     setInterval(() => {
    //         const gumball = new Gumball(ctx);
    //     }, 10)
    // }

    // loop(timestamp) {
    //     let dt = timestamp - this.lastTime;
    //     this.lastTime = timestamp;

    //     this.ctx.clearRect(0, 0, 650, 480);
    //     this.player.update(dt);
    //     this.player.draw(this.ctx);

    //     requestAnimationFrame(this.loop);
    // }

}

export default GumBallAttack;