import GumBallAttack from './gumball_attack';

document.addEventListener("DOMContentLoaded", () => {
    var canvas = document.getElementById("gumball-attack");
    var ctx = canvas.getContext("2d");

    // const GAME_WIDTH = 650;
    // const GAME_HEIGHT = 480;

    canvas.width = 650;
    canvas.height = 480;

    const game = new GumBallAttack(ctx, canvas);
    // ctx.clearRect(0, 0, 650, 480);
    game.render();





    // to start a game
    // const startGame = document.getElementById("start-game")

    // startGame.addEventListener("click", () => {
    //     playGame();
    // })

    // const playGame = () => {
    //     game = new GumBallAttack(ctx, GAME_WIDTH, GAME_HEIGHT);
    //     game.play;
    // }
});


