$(document).ready(function () {
    $("#strt").click(init.gameStrt);
    $("#reStrt").click(init.gameStrt);
    $("#reStrt").prop("disabled", true);
    navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
});

var init = {
    gameStrt: function () {
        $("#strt").prop("disabled", true);
        //$("#reStrt").prop("disabled", false);
        //apiCalls.fullScreenApi();
        init.setInitialValues();
        miscellaneous.scoreDisplay();
        $('#road').append('<div id="spnCount">04</div>');
        var counter = 4;
        var countDown = setInterval(function () {
            counter--;
            if (counter > 0) {
                //var countDownValue = $("#spnCount").text(+"" + "" + counter);
                $("#spnCount").animate({
                    opacity: 0
                }, function () {
                    $("#spnCount").text(+"" + "" + counter)
                        .animate({
                            opacity: 1
                        });
                });
            } else if (counter === 0) {
                $("#spnCount").text("GO!");


            } else if (counter === -1) {
                $("#spnCount").remove();
                trafficCarOps.trafficCar1(60, 80);
                trafficCarOps.trafficCar2(35, 50);
                trafficCarOps.trafficCar3(1, 30);
                moveBackground.moveBackgroundAtInterval();
                moveCar.moveCarOnButtonPress();
                collisionDetection.collision();
                init.obsCar1 = setInterval(trafficCarOps.intrvlTrafficCar3, 8);
                init.obsCar2 = setInterval(trafficCarOps.intrvlTrafficCar2, 5);
                init.obsCar3 = setInterval(trafficCarOps.intrvlTrafficCar1, 1);
                clearInterval(countDown);
            }
        }, 1000);
    },
    setInitialValues: function () {
        //collisionDetection.stopAllInterval();
        trafficCarOps.windowHeight = $(document).height() - 33;
        miscellaneous.finishPointPosition = 0;
        moveBackground.position = 0;
        trafficCarOps.positionCar1 = 0;
        trafficCarOps.positionCar2 = 0;
        trafficCarOps.positionCar3 = 0;
        trafficCarOps.score = 0;
        $('.obCar').remove();
        $("#finishPoint").remove();
        $("#finishModal").remove();
        $("#collisionModal").remove();
        $("#spnCount").remove();
    }
};