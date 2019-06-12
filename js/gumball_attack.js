import Board from './board';
import Gumball from './gumball';
import Player from './player';


class GumBallAttack {
    constructor(ctx, canvas) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.gameWidth = canvas.width;
        this.gameHeight = canvas.height;

        // this.lastTime = 0;
        // this.loop = this.loop.bind(this);

        this.gumball = new Gumball(ctx, canvas);
        this.player = new Player(ctx, canvas);
    }

    render() {
        let gumball = this.gumball;
        let player = this.player;

        debugger
        player.draw();
        debugger
        gumball.draw();
        // gumball.update();
        // setInterval(gumball.update(), 10);

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