// This opens the gamescreen on click of the start button.
$('#startButton').click(function() {
    buildGame()
})

// This opens the gamescreen on click of the start button.
$('#resetGame').click(function() {
    $('#pumpkinContainer').text('')
    resetGame()
})
//function shows the game screen and hides elements that aren't required for the game screen.
function buildGame() {
    $('#startButton').css({display: "none"})
    $('.topSection').css({display: "none"})
    $('#playScreen').css({display: "block"})
    $('#startingSection').css({display: "none"})
    makeNoise("evil")
}

function makeNoise(noise) {
    var audioObj = {
        hoaw: 'audio/Hoaaaw.mp3',
        evil: 'audio/evil_laugh.wav',
    }
    var audio = new Audio(audioObj[noise])
    audio.play()
}

//function resets the game by toggling all the setting changed back to their defaults
function resetGame() {
    $('#startButton').css({display: "block"})
    $('.topSection').css({display: "block"})
    $('#playScreen').css({display: "none"})
    $('#finishedBox').css({display: "none"})
    $("#playerProfile").css({display: "block", left: "0px"})
    $('#resetGame').css({display: "none"})
    startTimer.css({display: "block"})
    $('.fallingPumpkin').css({display: "none", top: "0px"})
    $('#startingSection').css({display: "block"})
    $('.scoreBox').text('0 s')
}