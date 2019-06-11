// import GumBallAttack from './gumball_attack';
// import Gumball from './gumball';

import Player from './player';

document.addEventListener("DOMContentLoaded", () => {
    var canvas = document.getElementById("gumball-attack");
    var ctx = canvas.getContext("2d");
});

const GAME_WIDTH = 650;
const GAME_HEIGHT = 480;

ctx.clearRect(0, 0, 650, 480);

// let game = new GumBallAttack(ctx);
// let gumball = new Gumball(ctx);
// let player = new Player(GAME_WIDTH, GAME_HEIGHT);

// game.draw(ctx);
// gumball.draw(GAME_WIDTH, GAME_HEIGHT);
// player.draw(ctx);