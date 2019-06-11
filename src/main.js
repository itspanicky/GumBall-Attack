import GumBallAttack from './js/gumball_attack';

document.addEventListener("DOMContentLoaded", () => {
    var canvas = document.getElementById("gumball-attack");
    var ctx = canvas.getContext("2d");
});

game = new GumBallAttack(ctx);
game.renderPreview();