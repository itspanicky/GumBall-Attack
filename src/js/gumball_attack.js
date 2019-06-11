import Board from './board';
import Gumball from './gumball';
import Player from './player';

class GumBallAttack {
    constructor(ctx) {
        this.ctx = ctx;
        
        this.gumball = new Gumball(ctx);
    }
    
}

export default GumBallAttack;