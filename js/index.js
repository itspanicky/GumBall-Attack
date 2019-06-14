import GumBallAttack from './gumball_attack';

document.addEventListener("DOMContentLoaded", () => {
    var canvas = document.getElementById("gumball-attack");
    var ctx = canvas.getContext("2d");

    // const GAME_WIDTH = 650;
    // const GAME_HEIGHT = 480;

    canvas.width = 650;
    canvas.height = 480;

    // preview
    let preview = new GumBallAttack(ctx, canvas);
    window.requestAnimationFrame(preview.preview);

    const gameMenu = document.getElementById("game-menu");
    const gameStart = document.getElementById("start");

    const retryMenu = document.getElementById("retry-menu");
    const gameRetry = document.getElementById("retry");
    
    // to start a game
    const playGame = () => {
        let game = new GumBallAttack(ctx, canvas);
        game.render();
        window.cancelAnimationFrame(preview.preview);
        window.requestAnimationFrame(game.render);
    }

    const replayGame = () => {
        let replay = new GumBallAttack(ctx, canvas);
        replay.render();
        // window.cancelAnimationFrame(game.preview);
        window.requestAnimationFrame(replay.render);
    }
    
    gameStart.addEventListener("click", () => {
        gameMenu.setAttribute("style", "visibility: hidden;");
        gameStart.setAttribute("style", "visibility: hidden;");
        playGame();
    })

    gameRetry.addEventListener("click", () => {
        gameMenu.setAttribute("style", "visibility: hidden;");
        retryMenu.setAttribute("style", "visibility: hidden;");
        replayGame();
    })
});


