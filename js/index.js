import GumBallAttack from './gumball_attack';

document.addEventListener("DOMContentLoaded", () => {
    var canvas = document.getElementById("gumball-attack");
    var ctx = canvas.getContext("2d");

    // const GAME_WIDTH = 650;
    // const GAME_HEIGHT = 480;

    canvas.width = 650;
    canvas.height = 480;

    const game = new GumBallAttack(ctx, canvas);

    // preview???
    window.requestAnimationFrame(game.preview);

    const gameStart = document.getElementById("start")
    const gameMenu = document.getElementById("game-menu")
    const gameRetry = document.getElementById("retry")
    
    // to start a game
    const playGame = () => {
        game.render();
        // var interval = setInterval(game.render, 10);
        // interval;
        window.cancelAnimationFrame(game.preview);
        window.requestAnimationFrame(game.render);
    }
    
    gameStart.addEventListener("click", () => {
        gameMenu.setAttribute("style", "visibility: hidden;");
        playGame();
    })

});


