import GumBallAttack from './gumball_attack';
import Player from './player';

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

    let player = new Player(ctx, canvas);
    let game = new GumBallAttack(ctx, canvas, player);
    window.requestAnimationFrame(game.render);

    
    // to start a game
    const playGame = () => {
        game.start = true;
        player.moveable = 1;
        game.render();
        if (game.sound === true) {
            music.play();
        }

        musicControl.addEventListener("click", () => {
            if (game.sound === true) {
                game.sound = false;
                player.sound = false;
                unmute.setAttribute("style", "visibility: visible;");
                mute.setAttribute("style", "visibility: hidden;");
                music.pause();
            } else {
                game.sound = true;
                player.sound = true;
                mute.setAttribute("style", "visibility: visible;");
                unmute.setAttribute("style", "visibility: hidden;");
                music.play();
            }
        })

    }

    const replayGame = () => {
        const newPlayer = new Player(ctx, canvas);
        let replay = new GumBallAttack(ctx, canvas, newPlayer);
        window.cancelAnimationFrame(game.render);
        replay.start = true;
        newPlayer.moveable = 1;
        replay.render();
        window.requestAnimationFrame(replay.render);
        replay.sound = game.sound;
        newPlayer.sound = player.sound;
        game.sound = false;
        player.sound = false;
        

        if (replay.sound === true) {
            music.play();
            debugger
        }

        musicControl.addEventListener("click", () => {
            if (replay.sound === true && newPlayer.sound === true) {
                replay.sound = false;
                newPlayer.sound = false;
                unmute.setAttribute("style", "visibility: visible;");
                mute.setAttribute("style", "visibility: hidden;");
                music.pause();
            } else {
                replay.sound = true;
                newPlayer.sound = true;
                mute.setAttribute("style", "visibility: visible;");
                unmute.setAttribute("style", "visibility: hidden;");
                music.play();
            }
        })
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
    //     if (game.sound === true) {
    //         game.sound = false;
    //         player.sound = false;
    //         unmute.setAttribute("style", "visibility: visible;");
    //         mute.setAttribute("style", "visibility: hidden;");
    //         music.pause();
    //     } else {
    //         game.sound = true;
    //         player.sound = true;
    //         mute.setAttribute("style", "visibility: visible;");
    //         unmute.setAttribute("style", "visibility: hidden;");
    //         music.play();
    //     }
    // })

});


