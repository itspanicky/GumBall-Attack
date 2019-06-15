import GumBallAttack from './gumball_attack';

document.addEventListener("DOMContentLoaded", () => {
    var canvas = document.getElementById("gumball-attack");
    var ctx = canvas.getContext("2d");

    // var music = document.getElementById("audio");
    // music.src = "assets/sounds/Into-Battle_v001.mp3";

    // var music = new p5.SoundFile('assets/into-battle.mp3');
    // music.play();

    // const GAME_WIDTH = 650;
    // const GAME_HEIGHT = 480;

    canvas.width = 650;
    canvas.height = 480;

    // preview
    let preview = new GumBallAttack(ctx, canvas);
    window.requestAnimationFrame(preview.preview);
    // window.requestAnimationFrame(preview.drawMusic);

    const gameMenu = document.getElementById("game-menu");
    const gameStart = document.getElementById("start");
    const retryMenu = document.getElementById("retry-menu");
    const gameRetry = document.getElementById("retry");
    const musicControl = document.getElementById("music");
    musicControl.onloadstart;
    musicControl.autoplay = true;
    
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

    // musicControl.addEventListener("click", () => {
    //     pauseMusic();
    // })

});


