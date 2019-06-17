import GumBallAttack from './gumball_attack';

document.addEventListener("DOMContentLoaded", () => {
    var canvas = document.getElementById("gumball-attack");
    var ctx = canvas.getContext("2d");

    // const GAME_WIDTH = 650;
    // const GAME_HEIGHT = 480;

    canvas.width = 650;
    canvas.height = 480;

    const gameMenu = document.getElementById("game-menu");
    const gameStart = document.getElementById("start");
    const retryMenu = document.getElementById("retry-menu");
    const gameRetry = document.getElementById("retry");
    
    const music = document.getElementById("music");
    const musicControl = document.getElementById("music-control");
    const unmute = document.getElementById("unmute");
    const mute = document.getElementById("mute")

    let game = new GumBallAttack(ctx, canvas);
    window.requestAnimationFrame(game.render);

    
    // to start a game
    const playGame = () => {
        game.start = true;
        game.render();
        if (game.sound === true) {
            music.play();
        }
    }

    const replayGame = () => {
        let replay = new GumBallAttack(ctx, canvas);
        window.cancelAnimationFrame(game.render);
        replay.start = true;
        replay.render();
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

    musicControl.addEventListener("click", () => {
        if (game.sound === true) {
            game.sound = false;
            unmute.setAttribute("style", "visibility: visible;");
            mute.setAttribute("style", "visibility: hidden;");
            music.pause();
        } else {
            game.sound = true;
            mute.setAttribute("style", "visibility: visible;");
            unmute.setAttribute("style", "visibility: hidden;");
            music.play();
        }
    })

});


