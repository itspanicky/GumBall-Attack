import GumBallAttack from './js/gumball_attack';

// document.addEventListener("DOMContentLoaded", () => {
// });
var canvas = document.getElementById("gumball-attack");
var ctx = canvas.getContext("2d");

let game = new GumBallAttack(ctx);
game.draw(ctx);