$(document).ready(function () {
    // variable to keep track of the mouse movement
    var gameStarted = false;
    var boundary = $(".boundary");
    var status = $("#status");
    // game is started
    $("#start").click(function () {
        status.text("Game started ...").css("color", "blue")
        gameStarted = true;
        // remove the lose class and start a new game
        if (boundary.hasClass("youlose")) {
            boundary.removeClass("youlose")
        }
       // The player loses if mouse touchs the boundary before it reaches the end while the game is on 
        boundary.mouseover(function () {
            if (gameStarted == true) {
                lose();
            }
        });

        // The player loses if mouse touchs leaves the maze division while the game is on 
        $("#maze").mouseleave(function () {
            if (gameStarted == true) {
                lose();
            }
        });
    });
    $("#end").mouseover(function () {
        // The player lose if mouse touchs the boundary before it reaches the end while the game is on 
        if (gameStarted == true && boundary.hasClass("youlose")) {
            lose();
        }
        // The player wins if mouse reaches the end while the game status is still on 
        else if (gameStarted == true) {
            win();
        }
    });

    function win() {
        gameStarted = false;
        status.text("You won! :]").css("color", "green");
        // alert("You won! :]");
    }

    function lose() {
        gameStarted = false;
        boundary.addClass("youlose");
        status.text("You Lost!").css("color", "red");
       // alert("Sorry, You lost. :[");
    }
});

 