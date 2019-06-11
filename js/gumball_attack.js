import Board from './board';
import Gumball from './gumball';
import Player from './player';

class GumBallAttack {
    constructor(ctx) {
        this.ctx = ctx;

        this.gumball = new Gumball(ctx);
    }

    renderGame() {
        const ctx = this.ctx;
        const gumball = this.gumball;

        gumball.draw(ctx);
        requestAnimationFrame(draw)
    }
    
}

export default GumBallAttack;